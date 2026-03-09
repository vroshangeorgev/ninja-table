/**
 * Author: Roshan
 * Dynamic table component that can display any array of objects based on a provided configuration.
 * It supports various data types, including text, numbers, dates, booleans, and more.
 * The component is designed to be flexible and reusable across different parts of an application.
 *
 * To Do: support sort, search, show/hide columns using UI, pagination, handling dynamic CSS
 */
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { TableColumn, TableConfig } from '../../models/table-config';
import { CommonModule, CurrencyPipe, DatePipe, DecimalPipe, PercentPipe } from '@angular/common';
import { getByPath } from '../../utils/get-by-path';

@Component({
  selector: 'ninja-table',
  imports: [CommonModule],
  templateUrl: './ninja-table.html',
  styleUrl: './ninja-table.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  standalone: true,
  providers: [DatePipe, CurrencyPipe, DecimalPipe, PercentPipe],
})
export class NinjaTable {
  @Input({ required: true }) rows: unknown[] = [];
  @Input({ required: true }) config!: TableConfig;

  constructor(
    private datePipe: DatePipe,
    private decimalPipe: DecimalPipe,
    private currencyPipe: CurrencyPipe,
    private percentPipe: PercentPipe,
  ) {}

  displayValue(row: unknown, col: TableColumn): string {
    const raw = this.valueOf(row, col);

    if (col.format) {
      return col.format(raw, row);
    }

    if (raw == null) return '';
    switch (col.type ?? 'text') {
      case 'boolean':
        return raw === true ? 'Yes' : raw === false ? 'No' : '';
      case 'number':
        return this.decimalPipe.transform(raw as any, '1.0-2') ?? String(raw);
      case 'currency':
        return this.currencyPipe.transform(raw as any) ?? String(raw);
      case 'percent':
        return this.percentPipe.transform(raw as any, '1.0-2') ?? String(raw);
      case 'date':
        return this.datePipe.transform(raw as any, col.dateFormat ?? 'yyyy-MM-dd') ?? String(raw);
      case 'datetime':
        return (
          this.datePipe.transform(raw as any, col.dateFormat ?? 'yyyy-MM-dd HH:mm') ?? String(raw)
        );
      case 'json':
        try {
          return JSON.stringify(raw);
        } catch {
          return String(raw);
        }
      case 'text':
      default:
        return String(raw);
    }
  }

  get visibleColumns(): TableColumn[] {
    const cols = this.config?.columns ?? [];
    return cols.filter((c) => c.visible !== false);
  }

  valueOf(row: unknown, col: TableColumn): unknown {
    return getByPath(row, col.key);
  }

  trackByColId = (_: number, col: TableColumn) => col.id;
}
