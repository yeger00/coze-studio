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
 
import { useShallow } from 'zustand/react/shallow';
import { useKnowledgeStore } from '@coze-data/knowledge-stores';

/**
 * 处理文档片段计数的 hook
 */
export const useSliceCounter = () => {
  const { dataSetDetail, setDataSetDetail } = useKnowledgeStore(
    useShallow(state => ({
      dataSetDetail: state.dataSetDetail,
      setDataSetDetail: state.setDataSetDetail,
    })),
  );

  // 处理添加块时更新计数
  const handleIncreaseSliceCount = () => {
    if (!dataSetDetail) {
      return;
    }

    setDataSetDetail({
      ...dataSetDetail,
      slice_count:
        // @ts-expect-error -- linter-disable-autofix
        dataSetDetail.slice_count > -1
          ? // @ts-expect-error -- linter-disable-autofix
            dataSetDetail.slice_count + 1
          : 0,
    });
  };

  // 处理删除块时更新计数
  const handleDecreaseSliceCount = () => {
    if (!dataSetDetail) {
      return;
    }

    setDataSetDetail({
      ...dataSetDetail,
      slice_count:
        // @ts-expect-error -- linter-disable-autofix
        dataSetDetail.slice_count > -1
          ? // @ts-expect-error -- linter-disable-autofix
            dataSetDetail.slice_count - 1
          : 0,
    });
  };

  return {
    handleIncreaseSliceCount,
    handleDecreaseSliceCount,
  };
};
