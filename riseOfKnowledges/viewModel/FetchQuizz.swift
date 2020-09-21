//
//  FetchQuizz.swift
//  riseOfKnowledges
//
//  Created by Florian Beaumont on 9/17/20.
//  Copyright © 2020 Florian Beaumont. All rights reserved.
//

import Foundation
import SwiftUI

class FetchQuizz : ObservableObject {
    
    @Published var quizz: [QuizzModel] = []
    
    let url = "http://localhost:3000/getQuizz/\(Locale.current.languageCode!)"
    
    func fetchQuizzDatas() {
        let urlSession = URLSession(configuration: .default)
        urlSession.dataTask(with: URL(string: url)!) { (response, _, _) in
            guard let quizzDatas = response else { return }
            
            do {
                let decoder = try JSONDecoder().decode([QuizzModel].self, from: quizzDatas)
                print("API -> \(decoder)")
                DispatchQueue.main.async {
                    self.quizz = decoder
                }
            } catch {
                print("JE CRASH HERE ! \(error.localizedDescription)")
            }
        }.resume()
        
    }
}
