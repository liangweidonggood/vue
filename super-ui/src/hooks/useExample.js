// 常用的增删改查 hook
import { reactive, ref } from 'vue';
import { ElMessageBox } from 'element-plus';
import { Message } from '_c/Message';
export function useExample() {
    // 请求接口的基本参数
    const defalutParams = reactive({
        pageIndex: 1,
        pageSize: 10
    });
    // 多选数据
    const selectionData = ref([]);
    // 表格数据
    const tableData = ref([]);
    // 表格加载状态
    const loading = ref(true);
    // 表格总条数
    const total = ref(0);
    // 是否展示弹窗
    const dialogVisible = ref(false);
    // 弹窗标题
    const title = ref('');
    // 组件名称
    const comName = ref('');
    // 表格展示条目改变时候重置基本参数
    function sizeChange(val) {
        loading.value = true;
        defalutParams.pageIndex = 1;
        defalutParams.pageSize = val;
    }
    // 表格分页改变时候重置基本参数
    function currentChange(val) {
        loading.value = true;
        defalutParams.pageIndex = val;
    }
    // 删除多选
    function delData(callBack, config) {
        if (selectionData.value.length === 0 && !config?.hiddenVerify) {
            Message.warning(config?.noDataText || '请选择需要删除的数据！');
            return;
        }
        ElMessageBox.confirm(config?.text || '此操作将永久删除选中数据, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        }).then(async () => {
            await callBack();
        });
    }
    // 多选变化的时候
    function handleSelectionChange(selection) {
        selectionData.value = selection;
    }
    // 改变弹窗dialogVisible
    function toggleVisible(val = false) {
        dialogVisible.value = val;
    }
    return {
        defalutParams,
        tableData,
        selectionData,
        loading,
        total,
        dialogVisible,
        title,
        comName,
        sizeChange,
        currentChange,
        delData,
        handleSelectionChange,
        toggleVisible
    };
}
//# sourceMappingURL=useExample.js.map