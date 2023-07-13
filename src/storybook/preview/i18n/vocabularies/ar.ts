import {TVocab} from './en';

const vocab: TVocab = {
  components: {
    button: {
      primary: 'أساسي',
      outlined: 'محاط بالحدود',
      ghost: 'شفاف',
      secondary: 'ثانوي',
      mini: 'صغير',
      small: 'صغير',
      large: 'كبير',
      circle: 'دائرة',
      flat: 'مسطح',
      leftIcon: 'رمز اليسار',
      rightIcon: 'رمز اليمين',
      leftRightIcons: 'رموز اليسار واليمين',
      error: 'خطأ',
      disabled: 'معطل',
    },
    checkbox: {
      error: 'رسالة الخطأ',
      hint: 'رسالة التلميح',
      content: 'محتوى مخصص',
      label: 'خانة اختيار',
    },
    checkboxGroup: {
      labelGroup: 'مجموعة خانات الاختيار',
      label1: 'الطفل الأول',
      label2: 'الطفل الثاني',
      label3: 'الطفل الثالث',
      label4: 'الطفل الرابع',
      error: 'خطأ في الاختبار',
    },
    chip: {
      contained: 'محتوى محدد',
      secondary: 'ثانوي',
      success: 'نجاح',
      grey: 'رمادي',
      outlined: 'محاط بالحدود',
      disabled: 'معطل',
      icons: 'رموز',
      leftIcon: 'رمز اليسار',
      rightIcon: 'رمز اليمين',
    },
    combobox: {
      optionLabel1: 'نيويورك',
      optionLabel2: 'لوس أنجلوس',
      optionLabel3: 'شيكاغو',
      optionLabel4: 'هيوستن',
      optionLabel5: 'فيلادلفيا',
      optionLabel6: 'فوينيكس',
      optionLabel7: 'سان أنتونيو',
      optionLabel8: 'سان دييغو',
      optionLabel9: 'دالاس',
      label: 'المدينة',
      placeholder: 'اختر مدينة',
      noOptionsFoundText: 'لا توجد مدن',
      hint: 'تلميح',
      hintMessage: 'رسالة التلميح',
      error: 'خطأ',
      errorMessage: 'رسالة الخطأ',
      disabled: 'معطل',
    },
    dialog: {
      openDialog: 'فتح الحوار',
      title: 'عنوان',
      text: 'مرحبًا. هذا نص فرعي. يمكن أن تكون طويلة جدًا وأكثر من جملتين حسب المشروع.',
      discard: 'تجاهل',
      cancel: 'إلغاء',
      confirm: 'يتأكد',
      label: 'مهندس المشروع',
    },
    divider: {
      listItemText: 'عنصر قائمة قابل للتوسيع',
      fullBleed: 'دمج كامل:',
      middle: 'وسط:',
      inset: 'داخلي:',
    },
    dropdown: {
      content:
        'لوريم إيبسوم دولور سيت آميت، كونسيكتيتور أديبيسسينج إيليت، سيد دو آيوسمود\n' +
        'تيمبور إنسيديديونت يوت لابوريت إت دولوري ماجنا أليكوا. أوت إنيم أد مينيم فنيام،\n' +
        'كيوس نوسترود إكسيرسيتاشن أولامكو لابوريس نيسيوت أليكيب إكس إيا كوممودو\n' +
        'كونسيكوات. دويس أوتي إرور دولور إن ريبريهيندريت إن فولوبتاتي فيليت إيسسي\n' +
        'سيلا أميت، إكسسيبتيور سينت أوككايكات كيو ديسيريونت مولليت أنيم إيست لابوروم.',
      label: 'قائمة منسدلة',
      placeholder: 'نص العنصر الافتراضي',
      value: 'قائمة منسدلة نصية',
      hint: 'تلميح',
      hintMessage: 'رسالة التلميح',
      error: 'خطأ',
      errorMessage: 'رسالة الخطأ',
    },
    elevation: {
      text:
        'ملاحظة: يستخدم هذا المكون طبقتين لإنشاء ظلال متعددة. انظر\n' +
        'شفرة المصدر للقصة لمعرفة كيفية استخدام storyStyles.borderRadius',
    },
    form: {
      select: {
        label: 'اختر',
        placeholder: 'اختر',
      },
      multiSelect: {
        label: 'اختيار متعدد',
        placeholder: 'اختيار متعدد',
        option1: 'واحد',
        option2: 'اثنان',
        option3: 'ثلاثة لاختبار الطول',
        option4: 'أربعة',
        option5: 'خمسة',
        option6: 'ستة',
      },
      checkboxes: {
        label1: 'الطفل الأول',
        label2: 'الطفل الثاني',
        label3: 'الطفل الثالث',
        label4: 'الطفل الرابع',
      },
      combobox: {
        label: 'مربع انتقاء',
        placeholder: 'اختر رقمًا',
      },
      radioButton: {
        label1: 'الخيار 1',
        label2: 'الخيار 2',
        label3: 'الخيار 3',
      },
      stayLoggedIn: 'البقاء مسجلاً داخلًا',
      switch: 'تبديل',
      checkboxGroup: 'مجموعة خانات الاختيار',
      email: 'البريد الإلكتروني',
      password: 'كلمة المرور',
      number: 'الرقم',
      numberInput: 'إدخال الرقم',
      submit: 'إرسال',
      reset: 'إعادة تعيين',
      takenEmailError: 'هذا البريد الإلكتروني مستخدم بالفعل',
      login: 'تسجيل الدخول',
      setExternalError: 'تعيين خطأ خارجي',
      resetExternally: 'إعادة تعيين خارجيًا',
    },
    input: {
      email: 'البريد الإلكتروني',
      hint: 'تلميح',
      hintMessage: 'رسالة التلميح',
      error: 'خطأ',
      errorMessage: 'رسالة الخطأ',
      disabled: 'معطل',
      testHint: 'تلميح الاختبار',
      digitMask: 'قناع الأرقام',
      prefix: 'بادئة',
      readOnly: 'للقراءة فقط',
      leftIcon: 'أيقونة اليسار',
      rightIcon: 'أيقونة اليمين',
      withIcons: 'مع رموز',
      withRemoveButton: 'مع زر إزالة',
      testValue: 'قيمة الاختبار',
      noLabel: 'بدون تسمية',
    },
    list: {
      label: 'قائمة',
      title: 'عنصر في سطر واحد',
      subtitle: 'نص ثانوي',
    },
    menu: {
      item: 'قائمة',
    },
    multiselect: {
      label: 'تحديد متعدد',
      placeholder: 'اختر خيارات متعددة',
      optionLabel1: 'واحد',
      optionLabel2: 'اثنان',
      optionLabel3: 'ثلاثة لاختبار الطول',
      optionLabel4: 'أربعة',
      optionLabel5: 'خمسة',
      optionLabel6: 'ستة',
      errorMessage: 'رسالة الخطأ',
      hintMessage: 'رسالة التلميح',
    },
    numberInput: {
      number: 'الرقم',
      numberValue: 'قيمة الرقم',
      errorMessage: 'هذا خطأ',
      hint: 'هذا تلميح',
      aed: 'AED',
    },
    passwordInput: {
      label: 'كلمة المرور',
      placeholder: 'أدخل كلمة المرور',
      hint: 'رسالة التلميح',
      error: 'رسالة الخطأ',
    },
    radioButton: {
      label1: 'الخيار 1',
      label2: 'الخيار 2',
      error: 'خطأ اختبار',
      hint: 'رسالة التلميح',
      customContent: 'محتوى مخصص',
    },
    searchInput: {
      placeholder: 'بحث',
      disabled: 'معطل',
      hintMessage: 'لا توجد خيارات',
      hintValue: 'موزات بنفسجية',
    },
    select: {
      optionLabel1: 'الخيار 1',
      optionLabel2: 'الخيار 2',
      optionLabel3: 'الخيار 3',
      optionLabel4: 'الخيار 4',
      optionLabel5: 'الخيار 5',
      label: 'اختر',
      placeholder: 'حدد خيارًا',

      hint: 'تلميح',
      hintMessage: 'رسالة التلميح',
      error: 'خطأ',
      errorMessage: 'رسالة الخطأ',
      disabled: 'معطل',
    },
    switch: {
      switch: 'تبديل',
      label: 'تسمية',
      hintMessage: 'رسالة التلميح',
      errorMessage: 'رسالة الخطأ',
      content: 'محتوى مخصص',
      longLabel: 'تسمية طويلة جداً جداً جداً جداً جداً جداً جداً جداً',
    },
    tag: {
      tagLabel: 'تسمية العلامة',
      tagText1: 'علامة 1',
      tagText2: 'علامة 2',
      tagText3: 'علامة 3',
      getAlertMessage: (value: any) => ` :إزالة العلامة بالمعرف${value}`,
    },
    text: {
      allTextVariants: 'جميع الأشكال النصية',
    },
    textArea: {
      yourMessage: 'رسالتك',
      loremIpsum: 'لوريم إيبسوم',
      hint: 'تلميح',
      hintMessage: 'رسالة التلميح',
      error: 'خطأ',
      errorMessage: 'رسالة الخطأ',
      disabled: 'معطل',
      maxLength: 'الحد الأقصى للطول',
      showLengthIndicator: 'إظهار مؤشر الطول',
    },
    textLink: {
      text: 'ارتباط النص',
    },
    tooltip: {
      title: 'عنوان الأداة التوضيحية',
      content: 'نص الأداة التوضيحية',
    },
    snackbar: {
      message: 'رسالة الخطأ',
      description: 'وصف الخطأ',
      button: 'إظهار الخطأ',
    },
  },
  modules: {
    auth: {
      forgotPassword: {
        passwordHintMessage:
          'يجب أن تحتوي كلمة المرور على 8 أحرف، حروف صغيرة وكبيرة، أرقام ورموز خاصة.',
        passwordDontMatch: 'كلمات المرور غير متطابقة.',
        createNewPassword: 'إنشاء كلمة مرور جديدة.',
        createPassword: 'إنشاء كلمة مرور.',
        repeatPassword: 'تكرار كلمة المرور.',
        confirm: 'تأكيد.',
        resetPassword: 'إعادة تعيين كلمة المرور.',
        resetPasswordDesc:
          'أدخل عنوان البريد الإلكتروني المرتبط بحسابك وسنرسل لك بريدًا إلكترونيًا يحتوي على تعليمات لإعادة تعيين كلمة المرور في أقرب وقت ممكن!',
        email: 'البريد الإلكتروني.',
        typeEmail: 'أدخل بريدك الإلكتروني.',
        sendPassword: 'إرسال تعليمات كلمة المرور.',
        login: 'تسجيل الدخول.',
        newUserRegister: 'مستخدم جديد؟ سجّل هنا.',
        invalidNumber: 'رقم هاتف غير صالح.',
        phoneNumberDesc:
          'أدخل رقم الهاتف المرتبط بحسابك وسنرسل لك رسالة قصيرة تحتوي على تعليمات لإعادة تعيين كلمة المرور في أقرب وقت ممكن!',
        phoneNumber: 'رقم الهاتف.',
      },
      login: {
        accountLogin: 'تسجيل الدخول إلى الحساب.',
        email: 'البريد الإلكتروني.',
        password: 'كلمة المرور.',
        passwordPlaceholder: 'أدخل كلمة المرور.',
        rememberMe: 'تذكرني.',
        forgotPassword: 'هل نسيت كلمة المرور؟',
        login: 'تسجيل الدخول.',
        newUserRegister: 'مستخدم جديد؟ سجّل هنا.',
        invalidPhoneNumber: 'رقم هاتف غير صالح.',
        phoneNumber: 'رقم الهاتف.',
      },
      signup: {
        passwordHintMessage:
          'يجب أن تحتوي كلمة المرور على 8 أحرف، حروف صغيرة وكبيرة، أرقام ورموز خاصة.',
        passwordDontMatch: 'كلمات المرور غير متطابقة.',
        addAccountDetails: 'أضف تفاصيل الحساب.',
        addEmail: 'أضف بريدك الإلكتروني وأنشئ كلمة مرور آمنة وفقًا للمعايير:',
        email: 'البريد الإلكتروني.',
        emailPlaceholder: 'أدخل بريدك الإلكتروني.',
        createPassword: 'إنشاء كلمة مرور.',
        repeatPassword: 'تكرار كلمة المرور.',
        createAccount: 'إنشاء حساب.',
        login: 'تسجيل الدخول.',
        codeMustHave: 'يجب أن يحتوي الرمز على 6 أرقام.',
        codeIsRequired: 'الرمز مطلوب.',
        emailVerificationTitle: 'تأكيد البريد الإلكتروني.',
        emailVerificationDescription: (HOURS_VALID: any) =>
          `يرجى إدخال رمز التحقق المكون من 6 أرقام الذي تم إرساله إلى some@mail.com. الرمز صالح لمدة ${HOURS_VALID} ساعة.`,
        insertVerificationCode: 'أدخل رمز التحقق.',
        sendCodeAgain: (resendCodeIn: any) =>
          `إعادة إرسال الرمز مرة أخرى ${
            resendCodeIn ? `بعد ${resendCodeIn} ثانية` : ''
          }`,
        next: 'التالي.',
        invalidPhoneNumber: 'رقم هاتف غير صالح.',
        acceptTerms: 'يرجى قبول الشروط والأحكام.',
        signup: 'التسجيل.',
        pleaseInsertPhone: 'يرجى إدخال رقم هاتفك للبدء:',
        phoneNumber: 'رقم الهاتف.',
        phoneNumberVerification: 'تحقق من رقم الهاتف.',
        phoneNumberVerificationDesc: (HOURS_VALID: any) =>
          `يرجى إدخال رمز التحقق المكون من 6 أرقام الذي تم إرساله إلى +49 1234 5678901. الرمز صالح لمدة ${HOURS_VALID} ساعة.`,
        insertSMSCode: 'أدخل رمز التحقق عبر الرسائل النصية.',
        iAcceptTermsAndConditions: [
          'أوافق على ',
          'شروط الاستخدام',
          ' و',
          'سياسة البيانات.',
        ],
      },
    },
    navigation: {
      home: 'الصفحة الرئيسية',
      settings: 'الإعدادات',
      profile: 'الملف الشخصي',
      info: 'معلومات',
    },
  },
};

export default vocab;
