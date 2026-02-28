/**
 * Author: Roshan
 * Model interfaces that define the column types, and column definitions
 */

export type ColumnType =
    | 'text'
    | 'number'
    | 'date'
    | 'datetime'
    | 'boolean'
    | 'currency'
    | 'percent'
    | 'json';

export interface TableColumn {
    // Unique identifier for tracking
    id: string;
    // Object key to read from row data, name, address.city, etc
    key: string;
    // Display name for the column header
    title: string;
    // Type of data in the column, affects formatting and sorting
    type?: ColumnType;
    // Optional: whether the column is visible
    visible?: boolean;
    dateFormat?: string;
    headerClass?: string;
    cellClass?: string;
}

export interface TableConfig {
    // Table columns definition
    columns: TableColumn[];
    // Optional: text to show when there are no rows
    emptyText?: string;
}
