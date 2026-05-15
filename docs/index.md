# Stock Management API System

## Project Overview
*   **Project Name:** Stock Management API
*   **Base URL:** `https://{{stockchecker.mockserver}}/stockChecker`
*   **Status:** Design Phase / Specification Ready

## Project Description
The Stock Management API suite is a robust back-end solution designed for modern supermarkets and grocery retailers. It streamlines daily operations by digitizing the lifecycle of inventory—from supplier onboarding and procurement to order fulfillment and financial reconciliation. 

### Key Capabilities:
*   **Dynamic Inventory Tracking:** Real-time visibility into stock levels with detailed metadata (expiry, category, packaging).
*   **Supplier Relationship Management:** A centralized digital registry for managing supplier agreements, contact metadata, and delivery schedules, ensuring all vendor data is accessible through a single set of services.
*   **End-to-End Procurement:** Integrated workflow to place multi-item orders and track fulfillment status at the item level.
*   **Financial Reconciliation:** Integrated APIs to automatically generate Payment Entries for every order, allowing store owners to monitor liabilities and log offline settlements for audit-ready records.

## Who This Project Is For
This project is designed for grocery retailers looking to transition from manual/paper-based processes to a digital **Stock Manager Application**. It serves as the foundational data layer for developers building retail management software.

## Project Dependencies
To leverage the full capabilities of the Stock Management APIs, ensure the following data structures are initialized in accordance with the API spec schema:
*   **Master Grocery List:** Initial product catalog.
*   **Supplier Registry:** Pre-defined list of authorized vendors.
*   **Category Schema:** Items must be mapped to one of the following: 
    *   *Cereals, Pulses, Vegetables, Fruits, Beverages, Snacks, NonFood, Imported, Readymadefood, Stationeries, DairyProducts.*

---

## System Architecture & Data Flow
The Stock Management system is designed to automate the end-to-end operations of a grocery store. By digitizing the workflow—from initial stock cataloging to final supplier reconciliation—these APIs eliminate the need for manual record-keeping and paper-based tracking. Every module is built from a store owner's perspective, ensuring that complex tasks like matching payments to orders are handled automatically to streamline daily store management.

### Core Modules:
1. **Grocery Management:** Serves as the centralized digital registry for all store inventory. It automates the tracking of critical item attributes—such as perishable status and expiry dates—to ensure efficient shelf-life management and eliminate manual stock-taking.
2. **Supplier Management:** Maps products to vendors. Includes delivery schedules and contact metadata to streamline communication.
3. **Order Management:** Handles the core business logic of procurement, correlating unique orders to specific suppliers and their associated line-items.
4. **Payment Management:** Manages the financial lifecycle of procurement. It automates the creation of a Payment Entry for every Purchase Order placed and provides a workflow to reconcile these entries once offline payments are finalized.


<img src="/img/HighLevelArchitecture_StockManagement.svg" alt="Architecture Diagram" width="791" />
---

## Service Overview
The following table summarizes the functional capabilities of the Stock Management System:

| Service Category | Logic & Business Rules | Primary Methods | Additional Capabilities |
| :--- | :--- | :--- | :--- |
| **Grocery Management** | View stock; Add/Update items; Retrieve metadata via ID. | `GET`, `POST` | Category filtering; Customizable pagination. |
| **Supplier Management** | Onboard vendors; View catalogs; Map suppliers to specific items. | `GET`, `POST` | Vendor-specific delivery schedules. |
| **Order Management** | Track recent orders; Place multi-item orders; Update item-level fulfillment. | `GET`, `POST`, `PATCH` | Configurable Date Range (From/To) tracking. |
| **Payment Management** | Monitor liabilities; Create payment records; Reconcile offline transactions. | `GET`, `POST`, `PATCH` | Idempotency support via `paymentId`. |

---

### Detailed Service Breakdown

#### **1. Grocery Management**
Allows users to maintain the store’s master product catalog.
*   **Catalog Retrieval:** Fetch full product lists with category-based filtering.
*   **Item Detail Lookup:** Retrieve comprehensive metadata for a specific item ID.
*   **Inventory Updates:** Append new products or modify existing stock attributes.

#### **2. Supplier Management**
Maintains the vendor ecosystem.
*   **Supplier Retrieval:** Fetch full vendor lists including delivery schedules and associated catalogs.
*   **Supplier Onboarding:** Register new vendors with associated product offerings.
*   **Supplier Lookup:** Retrieve specific supplier metadata and catalogs using a unique `SupplierID`.
*   **Reverse Lookup:** Identify all suppliers capable of providing a specific `ProductID`.

#### **3. Order Management**
Facilitates the procurement lifecycle.
*   **Order History:** Access historical procurement data with a default 7-day look-back period.
*   **Order Creation:** Generate purchase orders containing multiple line-items for a single vendor.
*   **Fulfillment Tracking:** Update `received_status` and `received_date` at the individual item level.

#### **4. Payment Management**
Handles financial finality.
*   **Payment Entry:** Generation of a corresponding payment order for every purchase order.
*   **Liability Monitoring:** Retrieve orders pending payment, including supplier summaries.
*   **Reconciliation:** Update payment records with "Success" status and dates once offline transactions are finalized.

---

### Integration & Setup
1. **Authentication:** The APIs currently utilize Basic Auth. For production-grade implementations, it is suggested to integrate OTP-based MFA to enhance account security.
2. **Database Integration:** Ensure data structures align with the schemas defined in the API Spec.
3. **Development Sandbox:** A Postman collection is provided for rapid prototyping.

#### **Sample Request**
Fetch the current inventory list for a specific company:
```bash
curl --request GET \
  --url http://stockmanager.server/stockChecker/companies/{companyId}/grocery-list \
  --header 'Authorization: Basic YOUR_AUTH_TOKEN'
```

**Full Endpoint Reference:** Detailed request/response schemas, JSON structures, and error codes are available in the **[Postman]**().

## Additional Documentation
* **API Design Spec:** [API_Spec]
* **Postman API Collection:** [Postman]

[API_Spec]: https://stock-management-docs.netlify.app/docs/api/stock-management-api-spec
[Postman]: https://raw.githubusercontent.com/kalpagam-mywork/stock-managemnt-api-docs/refs/heads/main/static/files/StockCheckerAPICollection.postman_collection_V2.0.json

## Technology Stack
- **API Specification:** OpenAPI 3.0 (OAS)
- **Design Tool:** Stoplight
- **Documentation Format:** Markdown (.md)
- **Testing & Prototyping:** Postman (Mock Servers)
- **Diagramming:** Draw.io
