type ItemType = {
  id: number;
  name: string;
  description: string;
  product_number: string;
  serial_number: string;
  quantity: number;
  uom: string;
  date_manufactured: string;
  date_expired: string;
  location: string;
  remarks: string;
  date_arrival_to_warehouse: string;
  authorized_inspection_personnel: string;
  created_at: string;
  updated_at: string;
};

type AuditLogType = {
  id: number;
  event: string;
  changes: string;
  modified_at: string;
  modified_by: string;
  created_at: string;
};

type ItemWithAuditType = {
  item: ItemType;
  audit_log: AuditLogType[];
};

export type {
  ItemType,
  AuditLogType,
  ItemWithAuditType,
}