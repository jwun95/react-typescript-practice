import type {ChangeEvent} from 'react';
import {useCallback, useState} from 'react';
import {Title} from '../components';
import {Input} from '../theme/daisyui';

export default function InputTest() {
  const [value, setValue] = useState<string>('');
  const [checked, setChecked] = useState<boolean>(false);

  const onChangeValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(notUsed => e.target.value);
  }, []);

  const onChangeChecked = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setChecked(notUsed => e.target.checked);
  }, []);

  return (
    <section className="mt-4">
      <Title>InputTest</Title>
      <div className="flex items-center justify-center p-4 mt-4">
        <Input type="text" value={value} onChange={onChangeValue} />
        <Input type="checkbox" checked={checked} onChange={onChangeChecked} />
      </div>
    </section>
  );
}