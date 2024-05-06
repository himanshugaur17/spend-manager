const senders = [
  {
    from: ["BV-CBSSBI", "BZ-CBSSBI", "VM-CBSSBI", "BP-CBSSBI"],
    metadata: ["has a debit by NACH of Rs XXX on Date", "of INR XXX deducted"],
  },
  {
    from: ["JM-AUBANK", "JD-AUBANK", "JK-AUBANK", "VD-AUBANK"],
    metadata: ["INR XXX spent on your AU .* at MERCHANTYYY on Date"],
  },
  {
    from: ["VM-SBIUPI"],
    metadata: ["debited by XXX on date Date trf to MERCHANTYYY Refno REFZZZ"],
  },
];
export default CONSTANTS = {
  COLORS: {
    green: "#2bfd9c",
    grey: "#f8f8f8",
    white: "white",
    errorMessage: "#fff",
  },
  SIZES: {
    h1: 25,
    h2: 17,
    smallText: 11,
  },
  MARGIN: {
    l2: 15,
  },
  PADDING: {
    vertical: 10,
    horizontal: 10,
  },
  BORDER: {
    radius: 30,
    width: 5,
  },
};
