const uppy = new Uppy.Core({
  meta: {
    foo: 'bar',
    
  }
})
  .use(Uppy.Dashboard, {
    target: '#dashboard',
    replaceTargetContent: true,
    inline: true,
    metaFields: [{
      id: 'foo',
      name: 'Foo',
      render: ({ value, onChange }, h) => {
        return h(
          'select',
          { value, onChange: e => onChange(e.target.value) },
          [
            h('option', { value: 'bar', selected: 'bar' === value }, 'Bar'),
            h('option', { value: 'baz', selected: 'baz' === value }, 'Baz'),
          ]
        );
      }
    }]
  })
  .use(Uppy.XHRUpload, { endpoint: 'https://api2.transloadit.com' })

// one caveat is that when multiple files are picked edit mode is only toggled for last item
// Uppy doesnt support limiting only file picker to single file selection
// if maxNumberOfFiles is set to 1 both file picker and dashboard is forced to upload 1 file
uppy.on('file-added', (file) => {
  uppy.getPlugin('Dashboard').setPluginState({
    fileCardFor: file.id || null,
    activeOverlayType: file.id ? 'FileCard' : null
  });
});