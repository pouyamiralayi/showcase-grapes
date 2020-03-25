export default (editor, opts = {}) => {
    const bm = editor.BlockManager;

    /*MDB forms*/
    bm.add('form', {
        label: 'Form',
        content: {type: 'FORM'}
    })
    /*MDB ecommerce*/
    bm.add('e-commerce', {
        label: 'E-Commerce',
        content: {type: 'ECOMMERCE'}
    })
    bm.add('time-line', {
        label: 'Time-Line',
        content: {type: 'TIMELINE'}
    })
    bm.add('gallery', {
        label: 'Gallery',
        content: {type: 'GALLERY'}
    })
    bm.add('video', {
        label: 'Video',
        content: {type: 'VIDEO'}
    })
    bm.add('map', {
        label: 'Map',
        content: {type: 'MAP'}
    })
    bm.add('accordion', {
        label: 'Accordion',
        content: {type: 'ACCORDION'}
    })
  bm.add('music', {
    label: 'Music',
    content: {type: 'MUSIC'}
  })
    // bm.add('MY-BLOCK', {
    //   label: 'My block',
    //   content: { type: 'MY-COMPONENT' },
    //   // media: '<svg>...</svg>',
    // });
}
