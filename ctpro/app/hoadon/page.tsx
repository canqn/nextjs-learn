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
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { Controller, useForm, SubmitHandler } from 'react-hook-form';
//import { DatePicker } from '@/components/ui/datepicker'
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { useCaptcha, useProfile } from '@/services/invoice';

interface IFormInput {
  action: 'buy' | 'sell';
  startDate: Date;
  endDate: Date;
  invoiceType: string;
  firstName: string;
  lastName: string;
  age: number;
}

function HoDonPage() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const { captcha, isLoading, error } = useCaptcha();
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    
  };
  const form = useForm();
  return (
    <Layout>
      <div>
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
                    {/* <FormDescription>
                This is your public display name.
              </FormDescription> */}
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
      <pre>{captcha.key}</pre>
      
    </div>
    </Layout>
  );
}

export default HoDonPage;
