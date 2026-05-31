import "./style.css";

type invoice = {
  id: number;
  item: string;
  qty: number;
  price: number;
};

const page = () => {
  const invoice: invoice[] = [
    { id: 1, item: "Spek Boom L", qty: 2, price: 250 },
    { id: 2, item: "Rooi Rose bos", qty: 1, price: 500 },
    { id: 3, item: "Wax Plant L", qty: 1, price: 150 },
    { id: 4, item: "Large terracotta pot", qty: 4, price: 250 },
  ];
  return (
    <div className="invContainer">
      <div className="mobileView">
        <h1>Not available on mobile</h1>
      </div>
      <div className="invoiceBody">
        {/* Header */}
        <div className="invoiceHeaderSection">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            fill="currentColor"
            className="bi bi-flower1"
            viewBox="0 0 16 16"
          >
            <path d="M6.174 1.184a2 2 0 0 1 3.652 0A2 2 0 0 1 12.99 3.01a2 2 0 0 1 1.826 3.164 2 2 0 0 1 0 3.652 2 2 0 0 1-1.826 3.164 2 2 0 0 1-3.164 1.826 2 2 0 0 1-3.652 0A2 2 0 0 1 3.01 12.99a2 2 0 0 1-1.826-3.164 2 2 0 0 1 0-3.652A2 2 0 0 1 3.01 3.01a2 2 0 0 1 3.164-1.826M8 1a1 1 0 0 0-.998 1.03l.01.091q.017.116.054.296c.049.241.122.542.213.887.182.688.428 1.513.676 2.314L8 5.762l.045-.144c.248-.8.494-1.626.676-2.314.091-.345.164-.646.213-.887a5 5 0 0 0 .064-.386L9 2a1 1 0 0 0-1-1M2 9l.03-.002.091-.01a5 5 0 0 0 .296-.054c.241-.049.542-.122.887-.213a61 61 0 0 0 2.314-.676L5.762 8l-.144-.045a61 61 0 0 0-2.314-.676 17 17 0 0 0-.887-.213 5 5 0 0 0-.386-.064L2 7a1 1 0 1 0 0 2m7 5-.002-.03a5 5 0 0 0-.064-.386 16 16 0 0 0-.213-.888 61 61 0 0 0-.676-2.314L8 10.238l-.045.144c-.248.8-.494 1.626-.676 2.314-.091.345-.164.646-.213.887a5 5 0 0 0-.064.386L7 14a1 1 0 1 0 2 0m-5.696-2.134.025-.017a5 5 0 0 0 .303-.248c.184-.164.408-.377.661-.629A61 61 0 0 0 5.96 9.23l.103-.111-.147.033a61 61 0 0 0-2.343.572c-.344.093-.64.18-.874.258a5 5 0 0 0-.367.138l-.027.014a1 1 0 1 0 1 1.732zM4.5 14.062a1 1 0 0 0 1.366-.366l.014-.027q.014-.03.036-.084a5 5 0 0 0 .102-.283c.078-.233.165-.53.258-.874a61 61 0 0 0 .572-2.343l.033-.147-.11.102a61 61 0 0 0-1.743 1.667 17 17 0 0 0-.629.66 5 5 0 0 0-.248.304l-.017.025a1 1 0 0 0 .366 1.366m9.196-8.196a1 1 0 0 0-1-1.732l-.025.017a5 5 0 0 0-.303.248 17 17 0 0 0-.661.629A61 61 0 0 0 10.04 6.77l-.102.111.147-.033a61 61 0 0 0 2.342-.572c.345-.093.642-.18.875-.258a5 5 0 0 0 .367-.138zM11.5 1.938a1 1 0 0 0-1.366.366l-.014.027q-.014.03-.036.084a5 5 0 0 0-.102.283c-.078.233-.165.53-.258.875a61 61 0 0 0-.572 2.342l-.033.147.11-.102a61 61 0 0 0 1.743-1.667c.252-.253.465-.477.629-.66a5 5 0 0 0 .248-.304l.017-.025a1 1 0 0 0-.366-1.366M14 9a1 1 0 0 0 0-2l-.03.002a5 5 0 0 0-.386.064c-.242.049-.543.122-.888.213-.688.182-1.513.428-2.314.676L10.238 8l.144.045c.8.248 1.626.494 2.314.676.345.091.646.164.887.213a5 5 0 0 0 .386.064zM1.938 4.5a1 1 0 0 0 .393 1.38l.084.035q.108.045.283.103c.233.078.53.165.874.258a61 61 0 0 0 2.343.572l.147.033-.103-.111a61 61 0 0 0-1.666-1.742 17 17 0 0 0-.66-.629 5 5 0 0 0-.304-.248l-.025-.017a1 1 0 0 0-1.366.366m2.196-1.196.017.025a5 5 0 0 0 .248.303c.164.184.377.408.629.661A61 61 0 0 0 6.77 5.96l.111.102-.033-.147a61 61 0 0 0-.572-2.342c-.093-.345-.18-.642-.258-.875a5 5 0 0 0-.138-.367l-.014-.027a1 1 0 1 0-1.732 1m9.928 8.196a1 1 0 0 0-.366-1.366l-.027-.014a5 5 0 0 0-.367-.138c-.233-.078-.53-.165-.875-.258a61 61 0 0 0-2.342-.572l-.147-.033.102.111a61 61 0 0 0 1.667 1.742c.253.252.477.465.66.629a5 5 0 0 0 .304.248l.025.017a1 1 0 0 0 1.366-.366m-3.928 2.196a1 1 0 0 0 1.732-1l-.017-.025a5 5 0 0 0-.248-.303 17 17 0 0 0-.629-.661A61 61 0 0 0 9.23 10.04l-.111-.102.033.147a61 61 0 0 0 .572 2.342c.093.345.18.642.258.875a5 5 0 0 0 .138.367zM8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
          </svg>
          <h1>Flower House</h1>
          {/* <span className="companyDetails">
            <div>77 Gold st</div>
            <div>Mayor Park</div>
            <div>West Best</div>
            <div>2407</div>
          </span> */}
        </div>
        {/* client info section */}

        <div className="clientInfoSection">
          <span>
            {" "}
            <div>INVOICE: #25468</div>
            <div>Betty&Betty</div>
          </span>

          <span>
            <div>20 Collet Rd</div>
            <div>Alberton</div>
            <div>JHB</div>
            <div>1408</div>
          </span>
        </div>
        {/* Body Grid */}

        <table className="invBodyGrid">
          <thead>
            <tr className="invTableHead">
              <th>ITEM</th>
              <th>QTY</th>
              <th>PRICE</th>
            </tr>
          </thead>
          <tbody className="invoiceTableBody">
            {invoice.map((i) => (
              <tr key={i.id}>
                <td className="invTableRow">{i.item}</td>
                <td className="invTableRow">{i.qty}</td>
                <td className="invTableRow">{i.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-end totalSection">
          <div>Subtotal: R1150.00</div>
          <div>VAT: R172.50</div>
          <div>Total: R1322.50</div>
        </div>

        {/* Footer  */}
        <div>
          <div className="mb-3 text-center">
            How to Pay Payment is due by June 15, 2026.Please select one of the
            options below:{" "}
          </div>
          <ol>
            <li>
              Credit/Debit Card or PayPal: Click the secure "Pay Online" link in
              your email notification or visit: https://acmedigitalsolutions.com
            </li>
            <li>
              Direct Bank Wire (ACH): Bank: Horizon National Bank | Acc:
              1234-5678-9012 | Routing: 987654321
            </li>
            <li>
              Mobile Payment: Venmo / CashApp: @AcmeDigitalDocs (Please include
              INV-2026-042 in the note)
            </li>
          </ol>
          <div className="text-center">
            {" "}
            A late fee of 1.5% per month will be applied to all overdue
            balances.
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
