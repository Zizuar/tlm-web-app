import dayjs from 'dayjs';
import { NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

export class DateUtils {
  public static buildDateFromFormData(formDate?: NgbDateStruct): Date {
    if (!formDate) {
      return new Date();
    }
    // build date from datepicker data
    const dayjsDate = dayjs.utc(
      `${formDate.year}-${formDate.month.toString().padStart(2, '0')}-${formDate.day
        .toString()
        .padStart(2, '0')}`, 'YYYY-MM-DD'
    ).utc(true);
    return dayjsDate.toDate();
  }
}
