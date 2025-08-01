/*
 * Copyright 2025 coze-dev Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
import classNames from 'classnames';
import { IconCozInfoCircle } from '@coze-arch/coze-design/icons';
import { Tooltip } from '@coze-arch/coze-design';

export const Tips = ({
  content,
  size = 'medium',
}: {
  content: string;
  size: 'small' | 'medium';
}) => (
  <Tooltip content={content}>
    <div
      className={classNames(
        size === 'small'
          ? 'w-[16px] h-[16px] rounded-[4px]'
          : 'w-[24px] h-[24px] rounded-[8px]',
        'flex items-center justify-center hover:coz-mg-secondary-hovered cursor-pointer',
      )}
    >
      <IconCozInfoCircle className="coz-fg-secondary" />
    </div>
  </Tooltip>
);
