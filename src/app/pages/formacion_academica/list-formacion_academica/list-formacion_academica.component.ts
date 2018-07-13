import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { ToasterService, ToasterConfig, Toast, BodyOutputType } from 'angular2-toaster';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import Swal from 'sweetalert2';
import 'style-loader!angular2-toaster/toaster.css';

@Component({
  selector: 'ngx-list-formacion-academica',
  templateUrl: './list-formacion_academica.component.html',
  styleUrls: ['./list-formacion_academica.component.scss'],
})
export class ListFormacionAcademicaComponent implements OnInit {
  uid: number;
  cambiotab: boolean = false;
  config: ToasterConfig;
  settings: any;
  source: LocalDataSource = new LocalDataSource();

  constructor(private translate: TranslateService, private toasterService: ToasterService) {
    this.loadData();
    this.cargarCampos();
    this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
      this.cargarCampos();
    });
  }

  cargarCampos() {
    this.settings = {
      add: {
        addButtonContent: '<i class="nb-plus"></i>',
        createButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      edit: {
        editButtonContent: '<i class="nb-edit"></i>',
        saveButtonContent: '<i class="nb-checkmark"></i>',
        cancelButtonContent: '<i class="nb-close"></i>',
      },
      delete: {
        deleteButtonContent: '<i class="nb-trash"></i>',
        confirmDelete: true,
      },
      mode: 'external',
      columns: {
        NivelFormacion: {
          title: this.translate.instant('GLOBAL.nivel_formacion'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        AnioInicio: {
          title: this.translate.instant('GLOBAL.anio_inicio'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        AnioGraduacion: {
          title: this.translate.instant('GLOBAL.anio_graduacion'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        PaisUniversidad: {
          title: this.translate.instant('GLOBAL.pais_universidad'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        CiudadUniversidad: {
          title: this.translate.instant('GLOBAL.ciudad_universidad'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        NombreUniversidad: {
          title: this.translate.instant('GLOBAL.nombre_universidad'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        Modalidad: {
          title: this.translate.instant('GLOBAL.modalidad'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        TituloObtenido: {
          title: this.translate.instant('GLOBAL.titulo_obtenido'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        TituloTrabajoGrado: {
          title: this.translate.instant('GLOBAL.titulo_trabajo_grado'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
        DescripcionTrabajoGrado: {
          title: this.translate.instant('GLOBAL.descripcion_trabajo_grado'),
          valuePrepareFunction: (value) => {
            return value;
          },
        },
      },
    };
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }

  loadData(): void {
    /** this.Service.get('').subscribe(res => {
      if (res !== null) {
        const data = <Array<any>>res;
        this.source.load(data);
      }
    }); **/
  }

  ngOnInit() {
  }

  activetab(): void {
    this.cambiotab = !this.cambiotab;
  }

  onEdit(event): void {
    this.uid = event.data.Id;
    this.activetab();
  }

  onCreate(event): void {
    this.uid = 0;
    this.activetab();
  }

  selectTab(event): void {
    if (event.tabTitle === this.translate.instant('GLOBAL.lista')) {
      this.cambiotab = false;
    } else {
      this.cambiotab = true;
    }
  }

  onChange(event) {
    if (event) {
      this.loadData();
      this.cambiotab = !this.cambiotab;
    }
  }

  itemselec(event): void {
  }

  onDelete(event): void {
    const opt: any = {
      title: this.translate.instant('GLOBAL.eliminar'),
      text: this.translate.instant('GLOBAL.eliminar') + '?',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
      showCancelButton: true,
      confirmButtonText: this.translate.instant('GLOBAL.aceptar'),
      cancelButtonText: this.translate.instant('GLOBAL.cancelar'),
    };
    Swal(opt)
      .then((willDelete) => {
        if (willDelete.value) {
          /** this.Service.delete('', event.data).subscribe(res => {
            if (res !== null) { **/
              this.loadData();
              this.showToast('info', this.translate.instant('GLOBAL.eliminar'),
              this.translate.instant('GLOBAL.confirmarEliminar'));
            /** }
          }); **/
        }
    });
  }

  private showToast(type: string, title: string, body: string) {
    this.config = new ToasterConfig({
      // 'toast-top-full-width', 'toast-bottom-full-width', 'toast-top-left', 'toast-top-center'
      positionClass: 'toast-top-center',
      timeout: 5000,  // ms
      newestOnTop: true,
      tapToDismiss: false, // hide on click
      preventDuplicates: true,
      animation: 'slideDown', // 'fade', 'flyLeft', 'flyRight', 'slideDown', 'slideUp'
      limit: 5,
    });
    const toast: Toast = {
      type: type, // 'default', 'info', 'success', 'warning', 'error'
      title: title,
      body: body,
      showCloseButton: true,
      bodyOutputType: BodyOutputType.TrustedHtml,
    };
    this.toasterService.popAsync(toast);
  }
}
