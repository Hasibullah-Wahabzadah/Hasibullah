const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // گرفتن مقادیر فیلدها
    const fullName = document.querySelector('input[name="full name"]').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.querySelector('textarea[name="message"]').value.trim();

    // اعتبارسنجی فیلدها
    const errorElement = document.getElementById('formError');
    if (fullName === '' || email === '' || message === '') {
      errorElement.textContent = 'Please! fill in all fields.';
      return;
    } else {
      errorElement.textContent = '';
    }

    // ارسال فرم
    document.querySelector('form').submit();
  };

  return (
    <div className='h-full'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 text-center mb-7 xl:mb-14'>
            Let`s <span className='text-accent'>contact me</span>
          </h2>
          <form action="https://usebasin.com/f/b39126c75020" method="POST" onSubmit={handleSubmit} className='flex-1 flex flex-col gap-6 w-full mx-auto Nunito'>
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='Full Name' name='full name' className='input' />
              <input type='email' placeholder='Email' id="email" name='email' className='input' />
            </div>
            <textarea placeholder='message' className='textarea' name='message'></textarea>
            <div id="formError" className="error text-accent font-bold text-xl"></div>
            <button type="submit" className='btn rounded-full border border-l-8 overflow-hidden border-white/20 text-white text-xl cursor-pointer relative z-10 group '>
              Submit
              <span
                className="absolute w-full h-[620px] -top-5 -left-2 bg-red-200 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-500 duration-1000 origin-right"
              ></span>
              <span
                className="absolute w-full h-[620px] -top-5 -left-2 bg-red-400 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-700 duration-700 origin-right"
              ></span>
              <span
                className="absolute w-full h-[620px] -top-5 -left-2 bg-red-700/80 rotate-12 transform scale-x-0 group-hover:scale-x-100 transition-transform group-hover:duration-1000 duration-500 origin-right"
              ></span>
              <span
                className="group-hover:opacity-100 group-hover:duration-1000 duration-100 opacity-0 absolute top-3.5 left-[160px] sm:left-[320px] z-10 font-bold text-xl"
              >Send
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
