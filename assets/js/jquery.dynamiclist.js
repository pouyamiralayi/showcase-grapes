/**
 * jQuery Dynamic List v 2.0.1
 * Copyright 2012 Ike Lin
 * http://www.apache.org/licenses/LICENSE-2.0.txt
 */
;(function ($) {

    $.fn.dynamiclist = function (options) {

        // support multiple elements
        if (this.length > 1) {
            this.each(function () {
                $(this).dynamiclist(options)
            });
            return this;
        }

        // ------------------------------------------------
        // private variables
        // ------------------------------------------------

        // setting plugin default settings and overriding options
        var settings = $.extend({
            itemClass: "gjs-page-item",
            addClass: "gjs-page-add",
            removeClass: "gjs-page-remove",
            titleClass: "gjs-page-title",
            minSize: 1,
            maxSize: 10,
            withEvents: false,
            addCallbackFn: null,
            removeCallbackFn: null
        }, options);


        var page_mgr = window.page_manager

        var editor = window.editor

        // ------------------------------------------------
        // private methods
        // ------------------------------------------------
        const switchPage = function (pageId, list) {
            /*find the active page*/
            // const current = page_mgr.current
            const current = localStorage.getItem('current') || 'page0'
            if (current == pageId) {
                return
            }
            console.log(current)
            // let currentPage = page_mgr.pages.find(p => p.id == current)
            const pages = JSON.parse(localStorage.getItem('pages')) || []
            const currentPageKey = Object.keys(pages).find(id => id == current) || -1
            let currentPage = pages[currentPageKey] || null
            // let currentPage = page_mgr.pages[page_mgr.current]
            /*if there is no active page, assign home page as active!*/
            if (!currentPage) {
                // currentPage = page_mgr.pages[0]
                currentPage = pages['page0'] || null
                if (!currentPage) return
            }
            currentPage.components = JSON.parse(JSON.stringify(editor.getComponents()))
            currentPage.style = JSON.parse(JSON.stringify(editor.getStyle()))
            try {
                list.find("#" + current + "." + settings.itemClass)[0].classList.remove('active')
            } catch (e) {

            }
            console.log('current page: ', currentPage)
            // console.log(currentPage)
            // console.log(page_mgr)
            // const nextPage = page_mgr.pages.find(p => p.id == pageId)
            const nextPageKey = Object.keys(pages).find(id => id == pageId) || -1
            let nextPage = pages[nextPageKey] || null
            if (nextPage) {
                editor.setComponents(nextPage.components || '');
                editor.setStyle(nextPage.style || '');
                // page_mgr.current = pageId
                localStorage.setItem('current', pageId)
                list.find("#" + pageId + "." + settings.itemClass)[0].classList.add('active')
            }
            localStorage.setItem('pages', JSON.stringify(pages))
            // console.log('pages: ', pages)
        }
        // Appends new item to the list by cloning the first item. The new
        // item is normalized and cleared of value before adding to the list.
        var handleAdd = function (list, event, settings) {
            var length = list.find("." + settings.itemClass).length;
            if (length < settings.maxSize) {
                // clone new item from first item
                var item = list.find("." + settings.itemClass + ":first").clone(
                    settings.withEvents);

                // register new item remove link
                /*show the remove button for other items!*/
                item.find("." + settings.removeClass).show().click(function (event) {
                    handleRemove(list, $(this), event, settings);
                });
                /*remove the add button from other items!*/
                item.find("." + settings.addClass).remove()
                // item.find("." + settings.removeClass).css({'display': 'block'})
                // item[0].classList.remove('active')

                /*click handler for the item!*/
                item.click(function () {
                    const pageId = item.attr('id')
                    // const pageId = item.attr('id').match(/\d+/g)
                    // console.log(pageId)
                    if (pageId) switchPage(pageId, list)
                })
                let lastIndex = list.find("." + settings.itemClass + ":last").attr('id').match(/\d+/g)[0] || '0'
                lastIndex = parseInt(lastIndex) + 1
                // clean up new item
                // normalizeItem(item, length);
                normalizeItem(item, lastIndex);
                // console.log(item.getAttributes())
                clearItem(item);
                // add new item
                /*TODO must be based on page title:*/
                /* generate the title of the item!*/
                item.find("." + settings.titleClass).text("Page " + (parseInt(item.attr('id').match(/\d+/g)[0]) + 1))

                var last = list.find("." + settings.itemClass + ":last");
                last.after(item);

                /*deactivate the current page*/
                // for (let page of page_mgr.pages) {
                //     page.active = false
                // }
                /*add new page entry & activate it!*/
                const pages = JSON.parse(localStorage.getItem('pages'))
                // page_mgr.pages.push({
                //     components: [], style: [], title: null, id: item.attr('id')
                // })
                pages[item.attr('id')] = {
                    components: [], style: [], title: null, id: item.attr('id')
                }
                localStorage.setItem('pages', JSON.stringify(pages))
                switchPage(item.attr('id'), list)
                // console.log(page_mgr.pages)
                // console.log(item.attr('id'))
                // page_mgr.current = length
                // console.log(pages)
                // call back before adding
                if (settings.addCallbackFn != null)
                    settings.addCallbackFn(item);
            }

            if (event != null)
                event.preventDefault();
        }

        // Handles remove link action. Removes an item from the list. Normalizes
        // the list before returning. If there is only minimal item left, clear
        // the value but do not remove the item.
        var handleRemove = function (list, alink, event, settings) {
            var length = list.find("." + settings.itemClass).length;
            var item = alink.parents("." + settings.itemClass + ":first");
            const current = localStorage.getItem('current')
            const pageId = item.attr('id')
            console.log(pageId)
            console.log(current)
            if (length == settings.minSize)
                clearItem(item);
            else {
                if (current == pageId) {
                    switchPage('page0', list)
                }
                const pages = JSON.parse(localStorage.getItem('pages'))
                if (Object.keys(pages).includes(pageId)) {
                    console.log(Object.keys(pages))
                    delete pages[pageId]
                    localStorage.setItem('pages', JSON.stringify(pages))
                }
                // const pageIdx = page_mgr.pages.findIndex(p => p.id == pageId)
                // page_mgr.pages = page_mgr.pages.splice(pageIdx, 1)
                item.remove();
            }

            // normalizeList(list, settings);


            if (settings.removeCallbackFn != null)
                settings.removeCallbackFn(item);

            event.preventDefault();
        }

        // Normalizes the list but changing all id, name and for attribute
        // inside the item to the current item number.
        var normalizeItem = function (item, itemNum) {
            // item.find("label, input, select, textarea").each(function () {
            //     var attributes = ["class", "name", "id", "for"]
            var attributes = ["id"]
            // for (var i = 0; i < attributes.length; i++) {
            for (let attr of attributes) {
                // var attr = item.attr(attributes[i]);
                var val = item.attr(attr);
                if (val) {
                    val = val.replace(/\d+/, itemNum);
                    // attr = attr.replace(/\[\d+\]\./, "[" + itemNum + "].");
                    // attr = attr.replace(/\[\d+\]\/, itemNum);
                }
                item.attr(attr, val);
            }
            // });
        }

        // Normalizes the entire list.
        var normalizeList = function (list, settings) {
            list.find("." + settings.itemClass).each(function () {
                var index = list.find("." + settings.itemClass).index(this);
                normalizeItem($(this), index);
            });
        }

        // Clears value from all input text items.
        var clearItem = function (item) {
            item.find("input[type=text], textarea").val("");
            item.find("input[type=radio]").attr({checked: false});
            item.find("input[type=checkbox]").attr({checked: false});
        }

        var init = function (list) {

            // remove first item's remove link
            list.find("." + settings.itemClass + ":first " + "." + settings.removeClass).hide()
            // list.find("." + settings.itemClass + ":first" + "." + settings.addClass).click(function () {
            //     handleAdd(list,)
            // switchPage('page0', list)
            // page_mgr.current = 0
            // localStorage.setItem('current', 'page0')
            // const nextPage = page_mgr.pages[0]
            // const nextPage = page_mgr.pages[0]
            // editor.setComponents(nextPage.components);
            // editor.setStyle(nextPage.style);
            // })
            list.find("." + settings.itemClass + ":first ")[0].classList.add('active')
            // list.find("#page0" + "." + settings.itemClass)[0].click(function () {
            // })
            // initializes the list
            var length = list.find("." + settings.itemClass).length;
            /*FIXME*/
            // while (settings.minSize > length) {
            //     handleAdd(list, null, settings);
            //     length++;
            // }

            // when add link is clicked
            list.find("." + settings.addClass).click(function (event) {
                event.stopPropagation()
                handleAdd(list, event, settings);
            });

            // when remove link is clicked
            list.find("." + settings.removeClass).click(function (event) {
                event.stopPropagation()
                handleRemove(list, $(this), event, settings);
            });
            list.find("." + settings.itemClass + ":first ").click(function () {
                // console.log('first clicked!')
                switchPage('page0', list)
            })

            return list;
        }

        return init(this);
    }
})(jQuery);
