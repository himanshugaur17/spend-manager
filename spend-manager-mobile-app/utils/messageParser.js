import { DateTime } from "luxon";
import XRegExp from "xregexp";
function upiTxnParser(sms) {
  const upiRegex = XRegExp(
    "debited by (?<amount>[\\d.]+) on date (?<date>\\d{2}[a-zA-Z]{3}\\d{2}) trf to (?<merchant>[A-Z]+) Refno (?<refNumber>\\d+)",
    "i"
  );
  if (!upiRegex.test(sms.body)) {
    console.log(`upiRegex failed to parse: ${sms.body}`);
  }
  const upiTxnInfo = upiRegex.exec(sms.body);
  const parseDate = (dateString) =>
    DateTime.fromFormat(dateString, "dd-MMM-yy");
  return {
    merchant: upiTxnInfo.groups.merchant,
    date: parseDate(upiTxnInfo.groups.date).toJSDate(),
    amount: upiTxnInfo.groups.amount,
    category: "misc",
    refNo: upiTxnInfo.groups.refNumber,
  };
}
export { upiTxnParser };
