import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [
    {
    path: 'dashboard',
    component: DashboardComponent,
    },
    {
    path: 'inscripcion',
    loadChildren: './inscripcion/mockup.module#MockupModule',
  }, {
    path: 'inscripciones',
    loadChildren: './inscripciones/inscripciones.module#InscripcionesModule',
  }, {
    path: 'certificados',
    loadChildren: './certificados/certificados.module#CertificadosModule',
  }, {
    path: 'ui-features',
    loadChildren: './ui-features/ui-features.module#UiFeaturesModule',
  }, {
    path: 'components',
    loadChildren: './components/components.module#ComponentsModule',
  }, {
    path: 'maps',
    loadChildren: './maps/maps.module#MapsModule',
  }, {
    path: 'charts',
    loadChildren: './charts/charts.module#ChartsModule',
  }, {
    path: 'editors',
    loadChildren: './editors/editors.module#EditorsModule',
  }, {
    path: 'forms',
    loadChildren: './forms/forms.module#FormsModule',
  }, {
    path: 'tables',
    loadChildren: './tables/tables.module#TablesModule',
  }, {
    path: 'cursos',
    loadChildren: './cursos/inscripcion-curso.module#FormsModule',
  }, {
    loadChildren: './inscripcion/inscripcion.module#InscripcionModule',
    },
    {
      path: 'formacion_academica',
      loadChildren: './formacion_academica/formacion_academica.module#FormacionAcademicaModule',
    },
    {
      path: 'idiomas',
      loadChildren: './idiomas/idiomas.module#IdiomasModule',
    },
    /**{
      path: 'publicaciones',
      loadChildren: './publicaciones/publicaciones.module#PublicacionesModule',
    },**/
    {
      path: 'experiencia_laboral',
      loadChildren: './experiencia_laboral/experiencia_laboral.module#ExperienciaLaboralModule',
    },
    {
    path: 'genero',
    loadChildren: './genero/genero.module#GeneroModule',
    },
    {
    path: 'grupo_etnico',
    loadChildren: './grupo_etnico/grupo_etnico.module#GrupoEtnicoModule',
    },
    {
    path: 'estado_civil',
    loadChildren: './estado_civil/estado_civil.module#EstadoCivilModule',
    },
    {
    path: 'tipo_discapacidad',
    loadChildren: './tipo_discapacidad/tipo_discapacidad.module#TipoDiscapacidadModule',
    },
    {
    path: 'persona',
    loadChildren: './persona/persona.module#PersonaModule',
    },
    {
    path: 'info_persona',
    loadChildren: './info_persona/info_persona.module#InfoPersonaModule',
    },
    {
      path: 'info_caracteristica',
      loadChildren: './info_caracteristica/info_caracteristica.module#InfoCaracteristicaModule',
    },
    {
    path: 'tipo_lugar',
    loadChildren: './tipo_lugar/tipo_lugar.module#TipoLugarModule',
    },
    {
    path: 'lugar',
    loadChildren: './lugar/lugar.module#LugarModule',
    },
    {
    path: 'lugar_ubicacion',
    loadChildren: './lugar_ubicacion/lugar_ubicacion.module#LugarUbicacionModule',
    },
    {
    path: 'tipo_contacto',
    loadChildren: './tipo_contacto/tipo_contacto.module#TipoContactoModule',
    },
    {
    path: 'informacion_contacto',
    loadChildren: './informacion_contacto/informacion_contacto.module#InformacionContactoModule',
    },
    {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
