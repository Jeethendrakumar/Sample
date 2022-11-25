import React from "react";
import { map } from "lodash";

function PrintButton({ refsToPrint, disabled }) {
  const deepCloneWithStyles = (node) => {
    const style = document.defaultView.getComputedStyle(node, null);
    const clone = node.cloneNode(false);
    if (clone.style && style.cssText) clone.style.cssText = style.cssText;
    for (let child of node.childNodes) {
      if (child.nodeType === 1) clone.appendChild(deepCloneWithStyles(child));
      else clone.appendChild(child.cloneNode(false));
    }
    return clone;
  };

  const printFunction = () => {
    const printWindow = window.open("", "", "height=400,width=800");
    printWindow.document.write(
      "<html><head><style>table {font-family: arial, sans-serif;border-collapse: collapse;width: 100%;}td, th {border: 1px solid #dddddd;text-align: left;padding: 8px;}</style><title>User Ticket</title></head><body id='print-body'><h1>Ticket Details</h1><table>"
    );

    const body = printWindow.document.getElementById("print-body");

    map(refsToPrint, (val, key) => {
      let row = document.createElement("tr");
      row.appendChild(document.createElement("td")).textContent = key;
      row.appendChild(document.createElement("td")).textContent = val;
      return body.appendChild(row);
    });
    printWindow.document.write("</table></body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <button
      className="btn btn-info col-sm-4 offset-sm-8"
      disabled={disabled ? false : true}
      onClick={printFunction}
    >
      {" "}
      Print Ticket
    </button>
  );
}

export default PrintButton;
