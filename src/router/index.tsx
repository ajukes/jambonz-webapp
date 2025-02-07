import React from "react";
import { Routes, Route } from "react-router-dom";

import { RequireAuth, Toast } from "src/components";
import { useSelectState } from "src/store";
import { Login, Layout as LoginLayout } from "src/containers/login";
import { Layout as InternalLayout } from "src/containers/internal";
import { NotFound } from "src/containers/notfound";

/** Login */
import CreatePassword from "src/containers/login/create-password";

/** Top navi */
import Users from "src/containers/internal/views/users";
import UserAdd from "src/containers/internal/views/users/add";
import UserEdit from "src/containers/internal/views/users/edit";
import Settings from "src/containers/internal/views/settings";
import Accounts from "src/containers/internal/views/accounts";
import AccountAdd from "src/containers/internal/views/accounts/add";
import AccountEdit from "src/containers/internal/views/accounts/edit";
import Applications from "src/containers/internal/views/applications";
import ApplicationAdd from "src/containers/internal/views/applications/add";
import ApplicationEdit from "src/containers/internal/views/applications/edit";
import RecentCalls from "src/containers/internal/views/recent-calls";
import Alerts from "src/containers/internal/views/alerts";

/** BYO navi */
import Carriers from "src/containers/internal/views/carriers";
import CarrierAdd from "src/containers/internal/views/carriers/add";
import CarrierEdit from "src/containers/internal/views/carriers/edit";
import SpeechServices from "src/containers/internal/views/speech-services";
import SpeechServicesAdd from "src/containers/internal/views/speech-services/add";
import SpeechServicesEdit from "src/containers/internal/views/speech-services/edit";
import PhoneNumbers from "src/containers/internal/views/phone-numbers";
import PhoneNumbersAdd from "src/containers/internal/views/phone-numbers/add";
import PhoneNumbersEdit from "src/containers/internal/views/phone-numbers/edit";
import MSTeamsTenants from "src/containers/internal/views/ms-teams-tenants";
import MSTeamsTenantsAdd from "src/containers/internal/views/ms-teams-tenants/add";
import MSTeamsTenantsEdit from "src/containers/internal/views/ms-teams-tenants/edit";

export const Router = () => {
  const toast = useSelectState("toast");

  return (
    <>
      {toast && <Toast type={toast.type} message={toast.message} />}
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginLayout />}>
          <Route index element={<Login />} />
          <Route
            path="create-password"
            element={
              <RequireAuth>
                <CreatePassword />
              </RequireAuth>
            }
          />

          {/* 404 page not found */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* Internal */}
        <Route
          path="/internal/*"
          element={
            <RequireAuth>
              <Routes>
                <Route path="*" element={<InternalLayout />}>
                  {/* Top navi */}
                  <Route path="users" element={<Users />} />
                  <Route path="users/add" element={<UserAdd />} />
                  <Route path="users/:user_sid/edit" element={<UserEdit />} />
                  <Route path="settings" element={<Settings />} />
                  <Route path="accounts" element={<Accounts />} />
                  <Route path="accounts/add" element={<AccountAdd />} />
                  <Route
                    path="accounts/:account_sid/edit"
                    element={<AccountEdit />}
                  />
                  <Route path="applications" element={<Applications />} />
                  <Route path="applications/add" element={<ApplicationAdd />} />
                  <Route
                    path="applications/:application_sid/edit"
                    element={<ApplicationEdit />}
                  />

                  <Route path="recent-calls" element={<RecentCalls />} />
                  <Route path="alerts" element={<Alerts />} />

                  {/* BYO navi */}
                  <Route path="carriers" element={<Carriers />} />
                  <Route path="carriers/add" element={<CarrierAdd />} />
                  <Route
                    path="carriers/:voip_carrier_sid/edit"
                    element={<CarrierEdit />}
                  />
                  <Route path="speech-services" element={<SpeechServices />} />
                  <Route
                    path="speech-services/add"
                    element={<SpeechServicesAdd />}
                  />
                  <Route
                    path="speech-services/:speech_credential_sid/edit"
                    element={<SpeechServicesEdit />}
                  />
                  <Route path="phone-numbers" element={<PhoneNumbers />} />
                  <Route
                    path="phone-numbers/add"
                    element={<PhoneNumbersAdd />}
                  />
                  <Route
                    path="phone-numbers/:phone_number_sid/edit"
                    element={<PhoneNumbersEdit />}
                  />
                  <Route path="ms-teams-tenants" element={<MSTeamsTenants />} />
                  <Route
                    path="ms-teams-tenants/add"
                    element={<MSTeamsTenantsAdd />}
                  />
                  <Route
                    path="ms-teams-tenants/:ms_teams_tenant_sid/edit"
                    element={<MSTeamsTenantsEdit />}
                  />

                  {/* 404 page not found */}
                  <Route path="*" element={<NotFound />} />
                </Route>
              </Routes>
            </RequireAuth>
          }
        />
      </Routes>
    </>
  );
};
