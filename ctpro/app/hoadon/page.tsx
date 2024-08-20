'use client';
import Header from '@/components/header';
import Layout from '@/components/layout';
import {
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  FormField,
} from '@/components/ui/form';
import { 
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
//import { DatePicker } from '@/components/ui/datepicker'
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCaptcha, useLogin, useProfile } from '@/services/invoice';
import { IUserLoginInvoiceOptions } from '@/types';
import { DatePickerDemo } from './parts/datepicker';

interface IFormInput {
  action: 'buy' | 'sell';
  username: string;
  password: string;
}

function HoDonPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCaptchaModal, setShowCaptchaModal] = useState(false);
  const [captchaValue, setCaptchaValue] = useState('');
  const { captcha, isLoading, error, refetch } = useCaptcha({showCaptchaModal});
  const { mutate, isLoading: isLoginLoading, error: loginError } = useLogin();
  const [loginData, setLoginData] = useState<IUserLoginInvoiceOptions>({
    username: '0315722954',
    password: 'Atl1234567@',
    cvalue: '',
    ckey: '',
  });

  const form = useForm();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    setShowCaptchaModal(true);
    refetch();
   
  };
  
  const handleLogin = () => {
     // Update loginData with captcha information
     const updatedLoginData = {
      ...loginData,
      cvalue: captchaValue,
      ckey: captcha?.key || ''
    };
    
    console.log('Logging in with:', updatedLoginData);
    setShowCaptchaModal(false);
    
    // Perform actual login logic here
    mutate(updatedLoginData);
  };
  
  return (
    <Layout>
      <div>
        <div className='w-500'>
        <DatePickerDemo />
        </div>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="flex items-center gap-3">
              <FormField
                control={form.control}
                name="action"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Loại hóa đơn</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="flex space-y-1"
                      >
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="buy" />
                          </FormControl>
                          <FormLabel className="font-normal">Bán ra</FormLabel>
                        </FormItem>
                        <FormItem className="flex items-center space-x-3 space-y-0">
                          <FormControl>
                            <RadioGroupItem value="sell" />
                          </FormControl>
                          <FormLabel className="font-normal">Mua vào</FormLabel>
                        </FormItem>
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhâp tên đăng nhâp" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Nhập mật khẩu" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>

      <div>
        <h1>Captcha Data</h1>
        <pre>{captcha?.key}</pre>
      </div>
      <Dialog open={showCaptchaModal} onOpenChange={setShowCaptchaModal}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Nhập Captcha</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              {isLoading ? (
                <div>Loading...</div>
              ) : error ? (
                <div>Error loading captcha</div>
              ) : (
                <div className="col-span-4" dangerouslySetInnerHTML={{ __html: captcha?.content }} />
              )}
              <Input
                id="captcha"
                className="col-span-4"
                value={captchaValue}
                onChange={(e) => setCaptchaValue(e.target.value)}
                placeholder="Nhập mã captcha"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleLogin}>Đăng nhập</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </Layout>
  );
}

export default HoDonPage;
