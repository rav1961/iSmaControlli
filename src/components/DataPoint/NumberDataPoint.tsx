import { ChangeEvent, useEffect, useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { postDataPointValue } from 'src/api/postDataPointValue';
import type { AnalogDataWidget } from './DataPoint.type';

interface NumberDataPointPropsType {
  data: AnalogDataWidget;
}

const NumberDataPoint = ({ data }: NumberDataPointPropsType) => {
  const { id, curVal } = data;
  const [inputValue, setInputValue] = useState<number>(0);
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const queryClient = useQueryClient();

  useEffect(() => {
    !isEditing && setInputValue(curVal);
  }, [curVal, isEditing]);

  const saveNewValue = useMutation({
    mutationFn: postDataPointValue,
    onSuccess: () => {
      queryClient
        .invalidateQueries({ queryKey: ['datapoints'] })
        .finally(() => setIsEditing(false));
    }
  });

  const updateHadle = (e: ChangeEvent<HTMLInputElement>) => {
    setIsEditing(true);

    const val = parseFloat(e.target.value);

    if (val) {
      setInputValue(() => val);

      saveNewValue.mutate({
        id,
        val
      });
    }
  };

  return (
    <div className="point-item__analog">
      <h4 className="point-item__title">{data.dis}</h4>
      <input type="number" value={inputValue} onChange={updateHadle} />
    </div>
  );
};

export default NumberDataPoint;
