enum WeekDays{
    Monday = "Thứ Hai",
    Tuesday = "Thứ Ba",
    Wednesday = "Thứ Tư",
    Thursday = "Thứ Năm",
    Friday = "Thứ Sáu",
    Saturday = "Thứ Bảy",
    Sunday = "Chủ Nhật"
}
const day=Object.values(WeekDays);

for (let i = 0; i < day.length; i++) {
    console.log(day[i]);  
}