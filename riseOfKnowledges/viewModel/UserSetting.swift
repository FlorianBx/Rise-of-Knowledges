//
//  UserSetting.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 10/5/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import SwiftUI

class UserSetting: ObservableObject {
    
    @Published var newScore: [ScorePostModel] = []
    
    let url = URL(string: "http://192.168.1.43:3000/postQuiz")!
    
    func sendScore() {
        guard let encoded = try? JSONEncoder().encode(newScore)
        else {
            print("Failed to encode newScore")
            return
        }
        var request = URLRequest(url: url)
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.httpMethod = "POST"
        request.httpBody = encoded
    }
}
