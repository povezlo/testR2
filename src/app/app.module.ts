import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ReviewsBlockComponent } from './components/reviews-block/reviews-block.component';
import { FooterComponent } from './components/footer/footer.component';
import { DemoBlockComponent } from './components/demo-block/demo-block.component';
import { RecentlyAddedBlockComponent } from './components/recently-added-block/recently-added-block.component';
import { ExpandLibBlockComponent } from './components/expand-lib-block/expand-lib-block.component';
import { FeaturesBlockComponent } from './components/features-block/features-block.component';
import { MostPopularBlocksComponent } from './components/most-popular-blocks/most-popular-blocks.component';
import { FeaturesPublisherComponent } from './components/features-publisher/features-publisher.component';
import { InfoBlockComponent } from './components/info-block/info-block.component';
import {LayoutModule} from '@angular/cdk/layout';
import { CarouselComponent } from './components/carousel/carousel.component';
import {CoreModule} from './window.module';
import {YoutubePlayerModule} from 'ngx-youtube-player-plus/dist';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import {ModalComponent} from './components/modal/modal.component';
import {FbService} from './services/fb.service';
import {HttpClientModule} from '@angular/common/http';
import {AppNotesDirective} from './directives/app-notes.directive';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReviewsBlockComponent,
    FooterComponent,
    DemoBlockComponent,
    RecentlyAddedBlockComponent,
    ExpandLibBlockComponent,
    FeaturesBlockComponent,
    MostPopularBlocksComponent,
    FeaturesPublisherComponent,
    InfoBlockComponent,
    CarouselComponent,
    ModalComponent,
    AppNotesDirective
  ],
  imports: [
    BrowserModule,
    LayoutModule,
    YoutubePlayerModule,
    HttpClientModule,
    ReactiveFormsModule,
    CoreModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [ModalComponent],
  providers: [FbService],
  bootstrap: [AppComponent]
})
export class AppModule { }
