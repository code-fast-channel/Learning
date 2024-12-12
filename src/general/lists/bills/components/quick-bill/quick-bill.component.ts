
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { empty } from '../../../../../shared/shared.constant';
import { itemConfig } from './quick-bill.constant';

@Component({
  selector: 'app-quick-bill',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './quick-bill.component.html',
  styleUrl: './quick-bill.component.scss'
})
export class QuickBillComponent {
  itemConfigVal = structuredClone(itemConfig);
  bill = [
    structuredClone(itemConfig)
  ];
  totalBillAmount = 0;

  calculateItemPrice() {
    this.bill.forEach((item: any) => {
      if(!empty.includes(item.quantity) && !empty.includes(item.price)) {
        item.totalPrice = item.quantity * item.price;
      }
    });
    this.totalBillCalculate();
  }

  totalBillCalculate() {
    this.totalBillAmount = this.bill.reduce((acc, item: any) => {
      const totalPrice = empty.includes(item.totalPrice) ? 0 : item.totalPrice;
      return acc + totalPrice;
    }, 0);
  }

  addNewRow() {
    this.bill.push(structuredClone(itemConfig));
  }

  delete(i: number) {
    this.bill.splice(i , 1);
    if(this.bill.length === 0) {
      this.addNewRow();
    }
    this.totalBillCalculate();
  }


  saveAsPdf(): void {
    const tableRows = this.bill
      .map(
        (item) => `
        <tr>
          <td>${item.itemName}</td>
          <td>${item.quantity}</td>
          <td>₹${item.price}</td>
          <td>₹${item.totalPrice}</td>
        </tr>`
      )
      .join('');

    const totalRow = `
      <tr>
        <td colspan="3" class="text-right"><strong>Total</strong></td>
        <td><strong>₹${this.totalBillAmount}</strong></td>
      </tr>`;

    const htmlContent = `
      <html>
        <head>
          <title>Invoice</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              margin: 20px;
            }
            table {
              border-collapse: collapse;
              width: 100%;
            }
            th, td {
              border: 1px solid #ddd;
              padding: 8px;
            }
            th {
              background-color: #4CAF50;
              color: white;
            }
            .text-center {
              text-align: center;
            }
            .text-right {
              text-align: right;
            }
          </style>
        </head>
        <body>
          <h2 class="text-center mb-4">Invoice</h2>
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Item</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              ${tableRows}
              ${totalRow}
            </tbody>
          </table>
        </body>
      </html>`;

    const printWindow = window.open('', '', 'height=800,width=1200');
    if (printWindow) {
      printWindow.document.write(htmlContent);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
      printWindow.close();
    }
    
  }

  downloadPDF(): void {
  // Generate the table rows dynamically by mapping over the `bill` array
  const tableRows = this.bill
    .map(
      (item) => `
      <tr>
        <td>${item.itemName || ''}</td>
        <td>${item.quantity || 0}</td>
        <td>₹${item.price || 0}</td>
        <td>₹${item.totalPrice || 0}</td>
      </tr>`
    )
    .join('');

  // Generate the total row
  const totalRow = `
    <tr>
      <td colspan="3" class="text-right"><strong>Total</strong></td>
      <td><strong>₹${this.totalBillAmount}</strong></td>
    </tr>`;

  // Build the full HTML content
  const htmlContent = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Invoice</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            margin: 20px;
          }
          table {
            border-collapse: collapse;
            width: 100%;
          }
          th, td {
            border: 1px solid #ddd;
            padding: 8px;
          }
          th {
            background-color: #4CAF50;
            color: white;
          }
          .text-center {
            text-align: center;
          }
          .text-right {
            text-align: right;
          }
        </style>
      </head>
      <body>
        <h2 class="text-center mb-4">Invoice</h2>
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Item</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            ${tableRows}
            ${totalRow}
          </tbody>
        </table>
      </body>
    </html>`;

  // Convert the HTML content to a Blob
  const blob = new Blob([htmlContent], { type: 'application/pdf' });

  // Create a download link dynamically
  const downloadLink = document.createElement('a');
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.download = 'invoice.pdf';

  // Trigger the download
  downloadLink.click();

  // Revoke the object URL to free up memory
  URL.revokeObjectURL(downloadLink.href);
}


}
