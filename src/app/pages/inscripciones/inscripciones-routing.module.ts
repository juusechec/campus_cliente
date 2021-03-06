import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InscripcionesComponent } from './inscripciones.component';
import { PosgradoComponent } from './posgrado/posgrado.component';
import { InfoBasicaComponent } from './info-basica/info-basica.component';
import { IdiomasComponent } from './posgrado/idiomas/idiomas.component';
import { DocumentosComponent } from './posgrado/documentos/documentos.component';
import { DescuentosComponent } from './posgrado/descuentos/descuentos.component';
import { TrabajoGradoComponent } from './posgrado/trabajo-grado/trabajo-grado.component';
import { FinInscripcionComponent } from './posgrado/fin-inscripcion/fin-inscripcion.component';
import { FormacionLaboralComponent } from './posgrado/formacion-laboral/formacion-laboral.component';
import { FormacionAcademicaComponent } from './posgrado/formacion-academica/formacion-academica.component';
import { InformacionContactoComponent } from './posgrado/informacion-contacto/informacion-contacto.component';
import { InformacionAdicionalComponent } from './posgrado/informacion-adicional/informacion-adicional.component';
import { SeleccionProgramaComponent } from './posgrado/seleccion-programa/seleccion-programa.component';

const routes: Routes = [{
    path: '',
    component: InscripcionesComponent,
    children: [{
        path: 'posgrado',
        component: PosgradoComponent,
        children: [{
            path: '',
            redirectTo: 'informacion-adicional',
            pathMatch: 'full',
        }, {
            path: 'informacion-adicional',
            component: InformacionAdicionalComponent,
        }, {
            path: 'informacion-contacto',
            component: InformacionContactoComponent,
        }, {
            path: 'seleccion-programa',
            component: SeleccionProgramaComponent,
        }, {
            path: 'formacion-academica',
            component: FormacionAcademicaComponent,
        }, {
            path: 'idiomas',
            component: IdiomasComponent,
        }, {
            path: 'formacion-laboral',
            component: FormacionLaboralComponent,
        }, {
            path: 'documentos',
            component: DocumentosComponent,
        }, {
            path: 'descuentos',
            component: DescuentosComponent,
        }, {
            path: 'trabajo-grado',
            component: TrabajoGradoComponent,
        }, {
            path: 'fin-inscripcion',
            component: FinInscripcionComponent,
        }],
    },
    {
        path: 'info-basica',
        component: InfoBasicaComponent,
        children: [],
    }],
}];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
    ],
    exports: [
        RouterModule,
    ],
})
export class InscripcionesRoutingModule {

}

export const routedComponents = [
    InscripcionesComponent,
    PosgradoComponent,
    InfoBasicaComponent,
];

