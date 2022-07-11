/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    typedef pair<int, int> p;
    ListNode* mergeKLists(vector<ListNode*>& lists) {
        if(lists.size() == 0) return nullptr;
        priority_queue<p,vector<p>,greater<p>>q;
        for(int i = 0; i < lists.size(); i++){
            if(!lists[i]) continue;
            else{
                cout<<lists[i]->val<<" ";
                q.push(make_pair(lists[i]->val,i));
                lists[i] = lists[i]->next;
            }
        }
        if(q.size() == 0) return nullptr;
        //cout<<endl;
        //cout<<q.top().first<<" "<<q.top().second<<endl;
        ListNode *head = new ListNode(q.top().first);
        ListNode *temp = head;
        while(q.size() != 0){
            int idx = q.top().second;
            q.pop();
            if(lists[idx]){
                q.push({lists[idx]->val, idx});
                lists[idx] = lists[idx]->next;   
            }
            if(q.size() != 0){
                temp->next = new ListNode(q.top().first);
                temp = temp->next;
            }
        }
        return head;
    }
};