import { Button, Loading } from "@nextui-org/react";
import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useCreateChannel } from "../../../hooks/useChannel";

const CreateChannelButton: React.FC = () => {
  const createChannel = useCreateChannel();
  const { isLoading, data } = useQuery("getName", () =>
    axios
      .get("https://api.namefake.com/english-united-states/male")
      .then((res) => res.data)
  );

  return (
    <Button
      onClick={() => createChannel.mutate({ name: data.name })}
      color="primary"
      rounded
      bordered
      size="lg"
      disabled={isLoading || createChannel.isLoading}
    >
      {isLoading || createChannel.isLoading ? (
        <Loading type="points" color="currentColor" size="sm" />
      ) : (
        "create channel"
      )}
    </Button>
  );
};

export default CreateChannelButton;
