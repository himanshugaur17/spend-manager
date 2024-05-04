import { DateTime } from "luxon";
import XRegExp from "xregexp";
import { TxnInfo } from "../constants/transaction";
import { SmsInfo } from "../modules/android-sms-manager/src/AndroidSmsManager.types";
function upiTxnParser(sms: SmsInfo): TxnInfo {
  const upiRegex = XRegExp(
    "debited by (?<amount>[\\d.]+) on date (?<date>\\d{2}[a-zA-Z]{3}\\d{2}) trf to (?<merchant>[A-Z]+) Refno (?<refNumber>\\d+)",
    "i"
  );
  const upiTxnInfo = upiRegex.exec(sms.body);
  const parseDate = (dateString: string) =>
    DateTime.fromFormat(dateString, "dd-MMM-yy");
  return {
    merchant: upiTxnInfo["merchant"],
    date: parseDate(upiTxnInfo["date"]).toJSDate(),
    amount: upiTxnInfo["amount"],
    category: "misc",
    refNo: upiTxnInfo["refNumber"],
  };
}
export { upiTxnParser };
