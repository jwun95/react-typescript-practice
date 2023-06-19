import {useMemo, useCallback} from 'react';
import {Title} from '../components';
import {Button} from '../theme/daisyui';
import * as D from '../data';

export default function HighOrderCallback() {
  const callback = (name: string) => () => alert(`${name} clicked`);
  const onClick = useCallback(callback, []);

  const buttons = useMemo(
    () =>
      D.makeArray(3)
        .map(D.randomName)
        .map((name, index) => (
          <Button
            key={index}
            onClick={onClick(name)}
            className="normal-case btn btn-primary btn-wide btn-xs">
            {name}
          </Button>
        )),
    [onClick]
  );

  return (
    <div className="mt-4">
      <Title>Callback</Title>
      <div className="flex mt-4 justify-evenly">{buttons}</div>
    </div>
  );
}