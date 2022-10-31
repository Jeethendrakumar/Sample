import React from "react";

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
      "<html><head><title>User Ticket</title></head><body id='print-body'>"
    );
    const body = printWindow.document.getElementById("print-body");
    var ticketID = document.createElement("p");
    ticketID.innerHTML = "Ticket ID: " + refsToPrint.id;
    const cloneTicket = deepCloneWithStyles(ticketID);
    body.appendChild(cloneTicket);
    var z = document.createElement("p");
    z.innerHTML = "Category: " + refsToPrint.category;
    const clone = deepCloneWithStyles(z);
    body.appendChild(clone);
    var y = document.createElement("p");
    y.innerHTML = "Subcategory: " + refsToPrint.subcategory;
    const cloneY = deepCloneWithStyles(y);
    body.appendChild(cloneY);
    var x = document.createElement("p");
    x.innerHTML = "User Description: " + refsToPrint.descrpiton;
    const cloneX = deepCloneWithStyles(x);
    body.appendChild(cloneX);
    var created = document.createElement("p");
    created.innerHTML = "Creation Time: " + refsToPrint.createdAt;
    const cloneCreated = deepCloneWithStyles(created);
    body.appendChild(cloneCreated);
    printWindow.document.write("</body></html>");
    printWindow.document.close();
    printWindow.print();
  };

  return (
    <button className="btn btn-info col-sm-4 offset-sm-8" disabled={disabled ? false : true} onClick={printFunction}>
      {" "}
      Print Ticket
    </button>
  );
}

export default PrintButton;
