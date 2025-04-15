import React, { useState ,useEffect} from 'react';
import StartRating from '../StartRating/StartRating';
import { Textarea } from "@/components/ui/textarea"
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from '@/components/ui/label';
import toast from 'react-hot-toast';
import { useCreateReviewMutation } from '@/redux/features/user/userApi';

interface IProps{
    productId:string
}

const ProductReviews:React.FC<IProps> = ({productId}) => {

    const [createReview,{isLoading,isError,isSuccess,error}] = useCreateReviewMutation()

    const [rating, setRating] = useState<number>(0);
    const [radioValue, setRadioValue] = useState<boolean>(true);
    const [textValue, setTextValue] = useState<string>();

    const handleRadio = (value:any) => {
       if(value==="true") setRadioValue(true)
       if(value==="false") setRadioValue(false)
    }

    const submit = () => {
        if(!textValue){
            toast.error("Vui lòng điền đầy đủ thông tin!")
            return
        }
        const data = {
            product:productId,
            startRating:rating,
            satisfied:radioValue,
            comment:textValue
        }

        createReview(data)
    }

    useEffect(() => {
        if (isLoading) {
          toast.loading('Đang chạy')
        }
        if (isSuccess) {
            toast.dismiss()
            toast.success('Bạn đã đánh giá sản phẩm thành công !')
        }
    
        if (isError) {
          const { data } = error as any
          toast.dismiss()
          toast.error(data.message ? data.message : 'Đã có lỗi! Vui lòng thử lại.')
        }
      }, [isLoading, isSuccess, isError])

    return (
        <div className='h-full w-full flex flex-col justify-center items-center gap-10 container'>
            <h1 className='md:text-[34px] text-[24px] font-bold'>Đánh giá sản phẩm</h1>
            <div className='max-w-[700px] w-full'>
                <div className='flex flex-col gap-4'>
                    <div>
                        <h3 className='font-bold text-[18px] gradient-title'>1. Tổng quát:</h3>
                        <div className='mt-3'>
                            <StartRating rating={rating} setRating={setRating}/>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-[18px] gradient-title'>2. Bạn có hài lòng với sản phẩm:</h3>
                        <div className='mt-3'>
                            <RadioGroup defaultValue="true"  onValueChange={(e:any)=>handleRadio(e)}>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={"true"} id="r1" />
                                    <Label htmlFor="r1">Có</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value={"false"} id="r2" />
                                    <Label htmlFor="r2">Không</Label>
                                </div>
                            </RadioGroup>
                        </div>
                    </div>
                    <div>
                        <h3 className='font-bold text-[18px] gradient-title'>3. Đánh giá sản phẩm:</h3>
                        <div className='rounded-md gradient-bg p-[1px] mt-3'>
                            <div className='w-full h-full bg-main rounded-md flex items-center p-[2px]'>
                                <Textarea className='border-none min-h-[300px]' placeholder="Bạn cho mình cảm nhận của bạn về tài liệu ở đây nhé!" onChange={(e:any)=>setTextValue(e.target.value)}/>
                            </div>
                        </div>
                    </div>
                    <Button onClick={()=>submit()}>Gửi đánh giá</Button>
                </div>
            </div>
        </div>
    );
};

export default ProductReviews;