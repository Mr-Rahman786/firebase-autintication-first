/*
১===যেভাবে সেট আপ করতে হবে 
# Go to the (console.google.firebase.com)
# creat a file name 
# go to docs > build > Autintication > web > get started 
[
import { getAuth } from "firebase/auth";
const auth = getAuth(app);

]




// ফ্রম এর ভ্যালু পেতে হলে আমাদের শুরুতে ======
#  form এর onsubmit ইউজ করতে হবে 
#  ক্লিক হ্যান্ডলার ইউজ করতে হবে।
# ইভেন্ট প্যারামিটার যোগ করতে হবে হ্যান্ডলার এর সাথে। 
\
const handleRegister = (event) => {
  event.preventDefault();
  const email = event.target.email.value;
  const password = event.target.password.value;
  console.log(email,password)
}


*/