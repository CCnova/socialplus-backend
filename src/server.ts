import { initApp } from "./app";

initApp().then(app => {
  app.listen(3030);
});