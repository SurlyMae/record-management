import { Component } from '@angular/core';
import { AgGridModule } from 'ag-grid-angular';
import { CellValueChangedEvent, ColDef } from 'ag-grid-community';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-quartz.css';

// Row Data Interface
interface IRow {
  first: string;
  last: string;
  license: string;
  licenseExp: string;
}

@Component({
  selector: 'app-record-list',
  standalone: true,
  imports: [AgGridModule],
  template: `
    <div class="content">
      <!-- The AG Grid component, with Dimensions, CSS Theme, Row Data, and Column Definition -->
      <ag-grid-angular
        style="width: 100%; height: 350px;"
        [class]="themeClass"
        [rowData]="rowData"
        [columnDefs]="colDefs"
        [defaultColDef]="defaultColDef"
        [pagination]="true"
        (cellValueChanged)="onCellValueChanged($event)"
      >
      </ag-grid-angular>
    </div>
  `,
  styleUrl: './record-list.component.css',
})
export class RecordListComponent {
  themeClass = 'ag-theme-quartz-dark';

  // Row Data: The data to be displayed.
  rowData: IRow[] = [
    {
      first: 'firstName',
      last: 'lastName',
      license: '1234567',
      licenseExp: '1/31/2024',
    },
    {
      first: 'anotherFirstName',
      last: 'anotherLastName',
      license: '1234567',
      licenseExp: '1/31/2026',
    },
    {
      first: 'yetAnotherFirstName',
      last: 'yetAnotherLastName',
      license: '1234567',
      licenseExp: '1/31/2025',
    },
  ];

  // Column Definitions: Defines & controls grid columns.
  colDefs: ColDef<IRow>[] = [
    { field: 'first' },
    { field: 'last' },
    { field: 'license' },
    { field: 'licenseExp' },
  ];

  defaultColDef: ColDef = { filter: true, editable: true };

  onCellValueChanged = (event: CellValueChangedEvent) => {
    console.log(`New Cell Value: ${event.value}`);
  };
}
