import React, { useEffect, useState } from "react";

import { getJaegerTrace } from "src/api";
import { toastError } from "src/store";

import type { JaegerResponse, RecentCall } from "src/api/types";

type TraceDetailsProps = {
  call: RecentCall;
};

export const TraceDetails = ({ call }: TraceDetailsProps) => {
  const [trace, setTrace] = useState<JaegerResponse>();

  useEffect(() => {
    getJaegerTrace(call.account_sid, call.trace_id)
      .then(({ json }) => {
        if (json) {
          setTrace(json);
        }
      })
      .catch((error) => {
        toastError(error.msg);
      });
  }, []);

  if (trace) {
    return <div>Trace details coming soon!</div>;
  }

  return null;
};
