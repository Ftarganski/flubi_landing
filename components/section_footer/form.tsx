import React, { useState } from "react";
import styles from "../../styles/Landpage.module.css";
import "../i18n/i18n";
import { useTranslation } from "react-i18next";
import { useForm } from "../../hooks";
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { OutlinedInput } from '@mui/material';

const Form = () => {
  const { t } = useTranslation("common");

  const translations:any = {
    en: {
      name: "Name",
      company: 'Company Name',
      email: 'example@example.com',
    },
    es: {
      name: 'Nombre',
      company:'Nombre de Empresa',
      email: 'ejemplo@ejemplo.com',
    },
  }

  const { formState, onInputChange, onResetForm, name, company, email } : any = useForm({
    name: '',
    company: '',
    email: '',
});
  const [locale, setLocale] = useState("en") 
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState<any>('')
  const [successToast, setSuccessToast] = useState(true)
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  //TODO Translation on form placeholders
  //Need to solve the translation on placeholders
  //And make conection to "LanguageSelector" component to define actual language

  const getPlaceholder = (inputName: any) => {
    return translations[locale][inputName] || ''
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    
    try {
      let response = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify({formState})
    })
    if (response.ok === true) {
        setHasSubmitted(true);
        setSuccessToast(true)
        setOpen(true)
        onResetForm()
    } else {
      setSuccessToast(false)
        setError(await response.text())
        setOpen(true)
    }
    } catch (error) {
      setSuccessToast(false)
        setError(error)
        setOpen(true)
    }
  
    
  };

  const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
  ) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });



  return (
    <>
        <form className={styles.form} onSubmit={handleSubmit}>
      <label htmlFor="name">{t("form_name")}</label>
      <OutlinedInput
        type="text"
        placeholder={getPlaceholder("name")}
        value={name}
        onChange={onInputChange}
        required
        name="name"
        color='secondary'
      style={{color:'white', backgroundColor:'#000000'}}
      />
      <label htmlFor="company">{t("form_company")}</label>
      <OutlinedInput
        type="text"
        placeholder={getPlaceholder("company")}
        value={company}
        onChange={onInputChange}
        name="company"
        required
        color='secondary'
        style={{color:'white', backgroundColor:'#000000'}}
      />

      <label htmlFor="email">{t("form_email")}</label>
      <OutlinedInput
      type="email"
      placeholder={getPlaceholder("email")}
      value={email}
      onChange={onInputChange}
      name="email"
      color='secondary'
      style={{color:'white', backgroundColor:'#000000'}}
      required
      />
      <Button
      type="submit"
      variant="contained"
      className={styles.form_button}
      style={{margin:'20px'}}
      >
        {t("form_SendMessage")}
      </Button>
      {/* <button className={styles.form_button} type="submit">
        
      </button> */}
    </form>
    <Stack spacing={2} sx={{ width: '100%' }}>
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={successToast ? "success" : "error"} sx={{ width: '100%' }}>
          {
            successToast ? (
              t('form_success')
            ) : (
              (t('form_error') + ' ' + '(' + error + ')')
            )
          }
        </Alert>
      </Snackbar>
    </Stack>
    
    </>

  );
};

export default Form;
