const path = require('path')

module.exports = {
  exportTrailingSlash:true,
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/home' },
      
      '/free-icons': { page: '/icons' },

      '/code': { page: '/code' },

      '/design': { page: '/design' },
      
      '/animated-icons':{page: '/gifs'},

      '/product-documents':{page: '/documents'},

      '/code-snippets-download':{page: '/codesnippet'},

      '/product-documents/download-api-documentation':{page: '/apidocumentation'},

      '/product-documents/download-technical-architecture':{page: '/technicalarchitecture'},

      '/product-documents/download-project-handover-template':{page: '/projecthandover'},

      '/product-documents/download-scope-documents':{page: '/scopedocuments'},

      '/product-documents/download-product-go-live-checklist':{page: '/golivechecklist'},

      '/free-design-resources':{page: '/designtemplate'},

      '/free-design-resources/designideas':{page: '/designideas'},

      '/free-design-resources/dashboarddesign':{page: '/dashboarddesign'},

      '/free-design-resources/materialdesign':{page: '/materialdesign'},

      '/free-design-resources/mobilemockup':{page: '/mobilemockup'},

      '/free-design-resources/mobiletemplate':{page: '/mobiletemplate'},

      '/free-design-resources/designthemes':{page: '/designthemes'},

      '/free-design-resources/mobilewireframe':{page: '/mobilewireframe'},
   
      '/free-design-resources/websitewireframe':{page: '/websitewireframe'},

    }
  },

  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
}