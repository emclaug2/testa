import { NgModule, SecurityContext } from '@angular/core';
import { ScaffoldComponent } from './scaffold/scaffold.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MarkdownModule, MarkedOptions } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KnobTextComponent } from './knobs/knob-text.component';
import { AppCommonComponentsModule } from '../../../components/components.module';
import { MatButtonModule } from '@angular/material/button';
import { ExampleCodeComponent } from './example-code/example-code.component';
import { MatIconModule } from '@angular/material/icon';
import { ViewCodeButtonComponent } from './buttons/view-code-button/view-code-button.component';
import { CopyCodeButtonComponent } from './buttons/copy-code-button/copy-code-button.component';
import { ToggleCodeButtonComponent } from './buttons/toggle-code-button/toggle-code-button.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { KnobBooleanComponent } from './knobs/knob-boolean.component';
import { KnobColorComponent } from './knobs/knob-color.component';
import { ColorPickerModule } from 'ngx-color-picker';
import { KnobSelectComponent } from './knobs/knob-select.component';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { KnobNumberComponent } from './knobs/knob-number.component';
import { MatSliderModule } from '@angular/material/slider';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    declarations: [
        KnobTextComponent,
        ScaffoldComponent,
        ViewCodeButtonComponent,
        ToggleCodeButtonComponent,
        ExampleCodeComponent,
        CopyCodeButtonComponent,
        KnobBooleanComponent,
        KnobColorComponent,
        KnobSelectComponent,
        KnobNumberComponent,
    ],
    imports: [
        AppCommonComponentsModule,
        CommonModule,
        ColorPickerModule,
        MatIconModule,
        MatCheckboxModule,
        MatExpansionModule,
        HttpClientModule,
        MatFormFieldModule,
        MatSliderModule,
        OverlayModule,
        MatInputModule,
        MatTabsModule,
        MatSelectModule,
        FormsModule,
        MatButtonModule,
        MarkdownModule.forRoot({
            loader: HttpClientModule,
            sanitize: SecurityContext.NONE,
            markedOptions: {
                provide: MarkedOptions,
                useValue: {
                    gfm: true,
                    breaks: false,
                    pedantic: false,
                    smartLists: true,
                    smartypants: false,
                },
            },
        }),
        MatDividerModule,
        ReactiveFormsModule,
    ],
    exports: [
        ExampleCodeComponent,
        ToggleCodeButtonComponent,
        AppCommonComponentsModule,
        KnobTextComponent,
        ScaffoldComponent,
        ViewCodeButtonComponent,
        MarkdownModule,
        MatButtonModule,
        CommonModule,
        CopyCodeButtonComponent,
        KnobBooleanComponent,
        KnobColorComponent,
        KnobSelectComponent,
        KnobNumberComponent,
    ],
})
export class SharedCompDocsModule {}
