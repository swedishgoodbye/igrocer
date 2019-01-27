import { BrowserModule } from "@angular/platform-browser";
import { ErrorHandler, NgModule } from "@angular/core";
import { IonicApp, IonicErrorHandler, IonicModule } from "ionic-angular";
import { HttpClientModule } from "@angular/common/http";
import { SplashScreen } from "@ionic-native/splash-screen";
import { StatusBar } from "@ionic-native/status-bar";

import { MyApp } from "./app.component";
import { HomePage } from "../pages/home/home";
import { TabsPage } from "../pages/tabs/tabs";
import { RecipesPage } from "../pages/recipes/recipes";
import { CartPage } from "../pages/cart/cart";
import { RecipePage } from "../pages/recipes/recipe/recipe";
import { CartService } from "../services/cart";
import { RestProvider } from "../providers/rest/rest";

@NgModule({
  declarations: [MyApp, HomePage, TabsPage, RecipesPage, RecipePage, CartPage],
  imports: [BrowserModule, HttpClientModule, IonicModule.forRoot(MyApp)],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    RecipesPage,
    CartPage,
    RecipePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CartService,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RestProvider
    // RecipeServiceProvider,
  ]
})
export class AppModule {}
