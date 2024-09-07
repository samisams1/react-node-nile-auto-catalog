import React from "react";
import { useTranslation } from "react-i18next";
import classes from "./SummaryBox.module.scss";
import Card from "../UI/ card/Card";

interface ItemProps {
  icon: string;   // Adjust the type accordingly
  text: string;   // Adjust the type accordingly
  amount: string; // Adjust the type accordingly
  currency: string; // Adjust the type accordingly
}

interface Props {
  item: ItemProps;
}

const SummaryBox: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <div className={classes.summary__box}>
      <Card>
        <div className={classes.summary__box__wrapper}>
          <div className={classes.summary__box__icon}>
          
          </div>
          <div className={classes.summary__box__info}>
            <p>{t(props.item.text)}</p>
            <div className={classes.summary__box__info__amount}>
              <h4>{t(props.item.amount)}</h4>
              <sup>{t(props.item.currency)}</sup>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SummaryBox;