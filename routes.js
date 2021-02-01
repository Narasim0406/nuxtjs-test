const nextRoutes = require("next-routes");

const routes = (module.exports = nextRoutes());


routes.add("home", "/");

routes.add("icons", "/free-icons");

routes.add("design", "/design");

routes.add("code", "/code");

routes.add("gifs", "/animated-icons");

routes.add('documents', '/product-documents');

routes.add('designForm', '/send-it-in');

routes.add('codesnippet', '/code-snippets-download');

routes.add('apidocumentation', '/product-documents/download-api-documentation');

routes.add('technicalarchitecture', '/product-documents/download-technical-architecture');

routes.add('projecthandover', '/product-documents/download-project-handover-template');

routes.add('scopedocuments', '/product-documents/download-scope-documents');

routes.add('golivechecklist', '/product-documents/download-product-go-live-checklist');

routes.add('designideas', '/free-design-resources/designideas');

routes.add('dashboarddesign', '/free-design-resources/dashboarddesign');

routes.add('designtemplate', '/free-design-resources');

routes.add('materialdesign', '/free-design-resources/materialdesign');

routes.add('mobilemockup', '/free-design-resources/mobilemockup');

routes.add('mobiletemplate' , '/free-design-resources/mobiletemplate');

routes.add('designthemes' , '/free-design-resources/designthemes');

routes.add('mobilewireframe', '/free-design-resources/mobilewireframe');

routes.add('websitewireframe', '/free-design-resources/websitewireframe');