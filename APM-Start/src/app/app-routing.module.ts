import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { PreloadSelectedModulesList } from './preload-selected.strategy.service';

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadSelectedModulesList }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
