import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SampleFormsComponent } from './sample-forms/sample-forms.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleTablesComponent } from './sample-tables/sample-tables.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { SampleDashboardComponent } from './sample-dashboard/sample-dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { LayoutModule } from '@angular/cdk/layout';
import { SampleDragFropComponent } from './sample-drag-frop/sample-drag-frop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { SampleNavComponent } from './sample-nav/sample-nav.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { CustomNavigation } from './custom-vertical-navigation/app-custom-navigation.component';
import { MatRippleModule } from '@angular/material/core';
import { CustomUserProfileComponent } from './custom-user-profile/custom-user-profile.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { CustomUserMenu } from './sample-user-menu/custom-user-menu.component';
import { SampleLoginComponent } from './sample-login/sample-login.component';
import {MatTreeModule} from '@angular/material/tree';
import { CustomHorizontalNavigation } from './custom-horizontal-navigation/custom-horizontal-navigation.component';
import { SampleErrorPageComponent } from './sample-404-error-page/sample-error-page.component';
import { TestEvalComponent } from './test-eval/test-eval.component';
import { TextEditorModule } from './text-editor/text-editor.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    SampleFormsComponent,
    SampleTablesComponent,
    SampleDashboardComponent,
    SampleDragFropComponent,
    SampleNavComponent,
    CustomNavigation,
    CustomUserProfileComponent,
    CustomUserMenu,
    SampleLoginComponent,
    CustomHorizontalNavigation,
    SampleErrorPageComponent,
    TestEvalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatGridListModule,
    MatMenuModule,
    MatIconModule,
    LayoutModule,
    DragDropModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatExpansionModule,
    MatRippleModule,
    MatDialogModule,
    ClipboardModule,
    FormsModule,
    ReactiveFormsModule,
    MatTreeModule,
    TextEditorModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
