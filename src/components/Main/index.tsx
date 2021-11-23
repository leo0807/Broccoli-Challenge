import React, {useState, useMemo, useCallback} from 'react'
import { Button, Modal, Input, Form } from "antd";
import { postRegister } from '../../utils/service';
const Main = () => {
  const [form, setForm] = useState<any>({
    name: '',
    email: ''
  });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<any>(undefined);
  const toggleModal = (status: boolean) => setShowModal(status);
  
  const resetModal = useCallback(() => {
    toggleModal(false);
    setResult(undefined);
  }, [])
  const renderFormContent = useMemo(() => {

  const confirmValidator = (rule: any, value: string, callback: any) => {
    if (value !== form.email) {
      callback("Two input email must be consistent.");
    }
    callback();
  }

  const handleChange = (value: string | any) => {
    if (value?.name || value?.email) {
      setForm({
        ...form,
        ...value
      });
    }
  }
    const handleFinished = () => {
      setLoading(true);
      postRegister(form).then(res => {
        setLoading(false);
        if (res.status === 200) {
          setResult({ code: 0 });
        } else {
          throw new Error("Error Message From Server");
        }
      }).catch(err => {
        setTimeout(() => {
          setLoading(false);
          setResult({
            code: -1,
            message: "Error Message From Server"
          });
        }, 1500);
      })
    }
    if (!result || result?.code === -1) {
      return (
        <Form
          defaultValue={form}
          onValuesChange={handleChange}
          onFinish={handleFinished}
        >
          <div className="pb-2">Request An Invite</div>
          <Form.Item
            name="name"
            rules={[
              { required: true, message: "Please input your full name!" },
              { min: 3, message: "Please input 3 string at least!" }
            ]}
          >
            <Input placeholder="Full Name" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: "Please input your email!" },
              {
                pattern: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
                message: "Email format is incorrect!"
              }
            ]}
          >
            <Input placeholder="Email" />
          </Form.Item>
                    <Form.Item
                        name="confirmEmail"
                        rules={[
                            { required: true, message: "Please input your email!" },
                            { validator: confirmValidator }
                        ]}
                    >
                        <Input placeholder="Confirm email" />
                    </Form.Item>
                    <Form.Item>
                        <Button 
                            type="primary" 
                            block={true} 
                            htmlType="submit" 
                            loading={loading}
                        >
                            {loading ? "Sending, please waiting..." : "Send"}
                        </Button>
                    </Form.Item>
                    <div className="text-center text-red-600">{result && result.message}</div>
        </Form>
      )
    } else {
      return (
        <React.Fragment>
          <div className="relative mb-5 text-2xl text-center after:bg-gray-600 after:bottom-0 after:absolute after:w-12 after:h-1 after:left-2/4">
            All done!
          </div>
          <div className="mb-12 text-center">
            You will be one of the first to experience <br />
            Broccoli & Co. when we launch.
          </div>
          <Button type="primary" block={true} onClick={resetModal}>Ok</Button>
        </React.Fragment>
      )
    }
  }, [result, loading, form, resetModal]);
  
  return (
    <div className="flex-1 overflow-hidden" >
      <div className="flex flex-col items-center justify-center w-full h-full">
        <h1 className="relative my-4 text-6xl tracking-widest text-center text-black">A better way</h1>
        <h1 className="relative my-4 text-6xl tracking-widest text-center text-black"> to enjoy every day.</h1>
        <p className="my-4 mb-12 text-2xl text-center text-black">Be the first to know when we launch.</p>
        <Button className="h-10 px-3 py-1 border-2" type="primary" onClick={toggleModal.bind(null, true)}>Request An Invite</Button>
      </div>
      {/* register and login modal */}
      <Modal
        className=""
        visible={showModal}
        centered={true}
        footer={null}
        width={400}
        closable={false}
        onCancel={resetModal}
      >
        {renderFormContent}
      </Modal>
    </div>
  )
}

export default Main
