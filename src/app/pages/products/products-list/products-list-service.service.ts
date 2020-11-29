import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { placa: "NER-2714", modelo: 'JETTA Trendline 1.4 TSI 16V 4p Mec.', marca: 'VW - VolksWagen', cor: 'Branco', valor: '48.680,00' },
      { placa: "KHM-2261", modelo: 'Golf 2.0/ 2.0 Mi Flex Comfortline/ Sport', marca: 'VW - VolksWagen', cor: 'Cinza', valor: '52.680,00' },
      { placa: "MVJ-5601", modelo: 'Saveiro CROSS 1.6 T. Flex 16V CE', marca: 'VW - VolksWagen', cor: 'Azul', valor: '21.786,00' },
      { placa: "KGG-2054", modelo: 'Parati 1.0 Mi FUN/ SunSet 16V 4p', marca: 'VW - VolksWagen', cor: 'Preto', valor: '15.650,00' },
      { placa: "IAG-9015", modelo: 'TOUAREG 3.2 24V V6 Tiptronic 5p', marca: 'VW - VolksWagen', cor: 'Dourado', valor: '269.341,00' },
      { placa: "MWT-8223", modelo: 'Fusca 2.0 TSI 16V Mec.', marca: 'RAM', cor: 'Dourado', valor: '72.678,00' },
      { placa: "MJS-1588", modelo: '2500 LARAMIE SLT TROPIV. 6.7 4x4 Diesel', marca: 'Ram', cor: 'Azul', valor: '420.937,00' },
      { placa: "MUL-2532", modelo: 'S-63 AMG 5.5 V8 BI-TURBO Aut.', marca: 'Mercedes-Benz', cor: 'Laranja', valor: '690.998,00' }
    ];
  }

  getColumns() {
    return {
      placa: {
        title: 'Placa',
        type: 'string',
        filter: true,
        width: '10%',
      },
      modelo: {
        title: 'Modelo',
        type: 'string',
        filter: true,
        width: '15%',
      },
      marca: {
        title: 'Marca',
        type: 'string',
        filter: true,
        width: '20%',
      },
      cor: {
        title: 'cor',
        type: 'string',
        filter: true,
        width: '10%',
      },
      valor: {
        title: 'Valor Fipe',
        type: 'string',
        filter: true,
        width: '10%',
      },
    }
  };

}
