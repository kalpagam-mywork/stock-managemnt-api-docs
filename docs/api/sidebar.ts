import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "api/stock-management-api-spec",
    },
    {
      type: "category",
      label: "Grocery Details",
      items: [
        {
          type: "doc",
          id: "api/get-grocery-list-by-company",
          label: "get-companyId-grocery-list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/post-companies-company-id-grocery-list",
          label: "post-companyId-grocery-list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-companies-company-id-grocery-list-item-id",
          label: "get-companyId-grocery-list-itemId",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Supplier",
      items: [
        {
          type: "doc",
          id: "api/get-companies-company-id-supplier-list",
          label: "get-companyId-supplier-list",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/post-companies-company-id-supplier-list",
          label: "post-companyId-supplier-list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-companies-company-id-supplier-list-supplier-id",
          label: "get-companyId-supplier-list-supplierId",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/get-companies-company-id-supplier-list-item-id",
          label: "get-companyId-supplier-list-itemId",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Order",
      items: [
        {
          type: "doc",
          id: "api/post-companies-company-id-new-supply-order-list",
          label: "post-companyId-newSupplyOrder-list",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/get-companies-company-id-new-supply-order-status",
          label: "get-companyId-newSupplyOrderStatus",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/patch-companies-company-id-new-supply-order-status",
          label: "patch-companyId-newSupplyOrderStatus",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Payment",
      items: [
        {
          type: "doc",
          id: "api/get-companies-company-id-supplier-payment-details",
          label: "get-companyId-supplierPaymentDetails",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "api/post-companies-company-id-supplier-payment-details",
          label: "post-companyId-supplierPaymentDetails",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "api/patch-companies-company-id-supplier-payment-details",
          label: "patch-companyId-supplierPaymentDetails",
          className: "api-method patch",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
