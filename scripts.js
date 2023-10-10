  // ورودی را از کاربر دریافت کنید
  const fruits = prompt("میوه ها را وارد کنید:");
  
  // میوه ها را شمارش کنید
  const fruitsArrey = fruits.split(",");
 

function countFruits(fruits) {
    // ایجاد یک آرایه برای ذخیره تعداد هر میوه
    const counts = fruits.reduce((counts, fruit) => {
      // اگر میوه جدیدی است، یک ورودی جدید در آرایه counts اضافه کنید
      if (!counts.hasOwnProperty(fruit)) {
        counts[fruit] = 1;
      } else {
        // در غیر این صورت، تعداد میوه را افزایش دهید
        counts[fruit]++;
      }
      return counts;
    }, {});
  
    // خروجی را به صورت یک پیام بدهید
    for (const fruit in counts) {
      console.log(`${fruit} ${counts[fruit]}تا`);
    }
  }

  countFruits(fruitsArrey);
  
