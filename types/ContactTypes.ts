// Interface for CustomAttributes
export interface ICustomAttributes {
  company?: string;
  organisation?: string;
  supabase_user_id?: string;
}

// Interface for WorkingHours
export interface IWorkingHours {
  day_of_week: number;
  closed_all_day: boolean;
  open_hour: number | null;
  open_minutes: number | null;
  close_hour: number | null;
  close_minutes: number | null;
  open_all_day: boolean;
}

// Interface for PreChatFields
export interface IPreChatFields {
  name: string;
  type: string;
  label: string;
  enabled: boolean;
  required: boolean;
  field_type: string;
  placeholder: string;
  values?: string[];
}

// Interface for PreChatFormOptions
export interface IPreChatFormOptions {
  pre_chat_fields: IPreChatFields[];
  pre_chat_message: string;
}

// Interface for Inbox
export interface IInbox {
  id: number;
  avatar_url: string;
  channel_id: number;
  name: string;
  channel_type: string;
  greeting_enabled: boolean;
  greeting_message: string;
  working_hours_enabled: true;
  enable_email_collect: boolean;
  csat_survey_enabled: boolean;
  enable_auto_assignment: boolean;
  auto_assignment_config: Record<string, unknown>;
  out_of_office_message: string;
  working_hours: IWorkingHours[];
  timezone: string;
  callback_webhook_url: string | null;
  allow_messages_after_resolved: boolean;
  lock_to_single_conversation: boolean;
  sender_name_type: string;
  business_name: string | null;
  widget_color: string;
  website_url: string;
  hmac_mandatory: boolean;
  welcome_title: string;
  welcome_tagline: string;
  web_widget_script: string;
  website_token: string;
  selected_feature_flags: string[];
  reply_time: string;
  hmac_token: string;
  pre_chat_form_enabled: boolean;
  pre_chat_form_options: IPreChatFormOptions;
  continuity_via_email: boolean;
  messaging_service_sid: string | null;
  phone_number: string | null;
  provider: string | null;
}

// Interface for ContactInboxes
export interface IContactInboxes {
  source_id: string;
  inbox: IInbox;
}

// Class for ContactData
export class Contact {
  additional_attributes: Record<string, unknown> = {};
  availability_status: 'online' | 'offline' = 'offline';
  email: string = '';
  id: number = 0;
  name: string = '';
  phone_number: string | null = null;
  identifier: string = '';
  thumbnail: string = '';
  custom_attributes?: ICustomAttributes = {};
  last_activity_at: number = Date.now();
  created_at: number = Date.now();
  contactableInboxes: string[] = [];
  contact_inboxes: IContactInboxes[] = [];

  constructor(initialData: Partial<Contact> = {}) {
    Object.assign(this, initialData);
  }
}
