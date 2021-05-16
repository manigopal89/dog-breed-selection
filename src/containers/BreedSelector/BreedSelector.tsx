import { CircularProgress } from "@material-ui/core";
import { FC, useEffect } from "react";
import {
  BreedSelector,
  BreedSelectorProps,
} from "../../components/BreedSelector";
import { RouteComponentProps } from "react-router-dom";
import { ErrorContainer } from "../../components/ErrorContainer";

export interface BreedSelectorContainerProps
  extends Omit<BreedSelectorProps, "onSelectBreed">,
    RouteComponentProps {
  loading: boolean;
  fetchBreed: any;
  error: any;
}

export const BreedSelectorContainer: FC<BreedSelectorContainerProps> = ({
  loading,
  fetchBreed,
  history,
  error,
  ...breedSelectorProps
}) => {
  useEffect(() => {
    fetchBreed();
  }, []);
  return !error ? (
    loading ? (
      <CircularProgress />
    ) : (
      <BreedSelector
        {...breedSelectorProps}
        onSelectBreed={
          ((data: any) => {
            history.push(
              `/breed-detail?${new URLSearchParams(data).toString()}`
            );
          }) as any
        }
      />
    )
  ) : (
    <ErrorContainer
    title='Hmmm'
    subTitle='Something went wrong'
      onBackClick={() => {
        history.goBack();
      }}
    />
  );
};
